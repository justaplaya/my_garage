const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const { GraphQLError } = require("graphql/error");
const shared = require('./data/shared.json');
const app = express();
const WSServer = require("express-ws")(app);
const aWss = WSServer.getWss();
const PORT = process.env.PORT || 5000;
const users = require('./data/users.json');
const carsFromFile = require('./data/cars.json');
const {
  delay,
  throwError,
  checkHeaders: _checkHeaders,
  createCarFunction,
  getRandIncident,
} = require("./utils");

const corsOptions = {
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.ws("/", () => {});

const checkHeaders = (headers) => _checkHeaders(headers, shared.tokenKey, users)
const cars = carsFromFile.map((car) => createCarFunction(car));

const root = {
  getAllCars: async (parent, args) => {
    await delay(2000);
    checkHeaders(args.headers);

    return cars;
  },
  getOneCar: async ({ id }, args) => {
    await delay(2000);
    checkHeaders(args.headers);

    if (!cars.find((car) => car.id === Number(id))) {
      throwError.notFound()
    }

    return cars.find((car) => car.id === Number(id));
  },
  createCar: async ({ input }, args) => {
    await delay(2000);
    checkHeaders(args.headers);

    const car = createCarFunction(input);
    cars.push(car);
    return car;
  },
  updateCar: async ({ input }, args) => {
    await delay(2000);
    checkHeaders(args.headers);

    const carsCopy = JSON.parse(JSON.stringify(cars));
    const newCar = carsCopy.find((i) => i.id === Number(input.id));
    if (!newCar) {
      throw new GraphQLError("car not found", {
        extensions: {
          code: "404",
        },
      });
    }

    const index = carsCopy.indexOf(newCar);
    newCar.brand = input.brand;
    newCar.model = input.model;
    newCar.year = input.year;
    newCar.maxSpeed = input.maxSpeed;
    newCar.timeUpTo100 = input.timeUpTo100;
    cars.splice(index, 1, newCar);

    return newCar;
  },
  deleteCar: async ({ input }, args) => {
    await delay(2000);
    checkHeaders(args.headers);

    const carsCopy = JSON.parse(JSON.stringify(cars));
    const car = carsCopy.find((i) => i.id === Number(input.id));

    if (!car) {
      throw new GraphQLError("car not found", {
        extensions: {
          code: "404",
        },
      });
    }

    const index = carsCopy.indexOf(car);
    cars.splice(index, 1);

    return {
      id: -1,
      brand: "",
      model: null,
      year: null,
      maxSpeed: null,
      timeUpTo100: null,
    };
    // TODO а можно вообще ничего не возвращать?)
  },
};



setInterval(async () => {
  await delay(Math.trunc(Math.random() * 10000));

  aWss.clients.forEach((client) => {
    client.send(
      JSON.stringify({ method: "new_incident", data: getRandIncident(cars) }),
    );
  });
}, 1500);

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  }),
);

app.listen(PORT, () => console.log(`Main server is running on ${PORT} port`));
