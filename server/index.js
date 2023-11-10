const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const { GraphQLError } = require("graphql/error");
const app = express();
const WSServer = require("express-ws")(app);
const aWss = WSServer.getWss();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.ws("/", () => {});

/** отдаёт рандомное число, помноженное на multiplier и округлённое вверх */
const getRand = (multiplier) => Math.ceil(Math.random() * multiplier);
const getRandId = () => Date.now() * Math.trunc(Math.random() * 10000);

const periods = ["week", "month", "year"];
const incidents = ["evacuation", "violation", "crash"];

/** отдаёт объект [период]: количество инцидентов  */
const getIncidentData = () =>
  periods.reduce((acc, item, index) => {
    return { ...acc, [item]: getRand(Math.pow(10, index + 1)) };
  }, {});

const createCarFunction = (input) => {
  const id = getRandId();
  const _incidents = incidents.reduce((acc, item) => {
    return { ...acc, [item]: getIncidentData() };
  }, {});

  return {
    id,
    incidents: _incidents,
    ...input,
  };
};
const mock = [
  {
    brand: "subaru",
    model: "Impreza 2003",
    year: 2005,
    maxSpeed: 329,
    timeUpTo100: 2.3,
  },
  {
    brand: "chery",
    model: null,
    year: null,
    maxSpeed: null,
    timeUpTo100: null,
  },
  {
    brand: "mitsubishi",
    model: "Lancer Evo VII",
    year: 2002,
    maxSpeed: 305,
    timeUpTo100: 2.7,
  },
  {
    brand: "hyundai",
    model: "accent",
    year: 2007,
    maxSpeed: 294,
    timeUpTo100: 3.1,
  },
];
const cars = mock.map((car) => createCarFunction(car));

const updateCar = (input) => {
  return cars.find((car) => car.id === input.id);
};
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
    // }, 0);
  });
};
const root = {
  getAllCars: async () => {
    await delay(2000);
    return await cars;
  },
  getOneCar: async ({ id }) => {
    await delay(2000);
    if (!cars.find((car) => car.id === Number(id))) {
      throw new GraphQLError("car not found", {
        extensions: {
          code: "404",
        },
      });
    }
    return await cars.find((car) => car.id === Number(id));
  },
  createCar: async ({ input }) => {
    await delay(2000);
    const car = createCarFunction(input);
    cars.push(car);
    return car;
  },
  updateCar: async ({ input }) => {
    await delay(2000);
    const carsCopy = JSON.parse(JSON.stringify(cars));
    const newCar = carsCopy.find((i) => i.id === Number(input.id));
    if (!newCar) return; // exception
    const index = carsCopy.indexOf(newCar);
    newCar.brand = input.brand;
    newCar.model = input.model;
    newCar.year = input.year;
    newCar.maxSpeed = input.maxSpeed;
    newCar.timeUpTo100 = input.timeUpTo100;
    cars.splice(index, 1, newCar);
    return await newCar;
  },
  deleteCar: async ({ input }) => {
    await delay(2000);
    const carsCopy = JSON.parse(JSON.stringify(cars));
    const car = carsCopy.find((i) => i.id === Number(input.id));
    if (!car) return; // exception
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

const getRandIntBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandIncident = () => {
  const id = getRandId();
  const car = cars[getRandIntBetween(0, cars.length - 1)];
  const incident = incidents[getRandIntBetween(0, incidents.length - 1)];

  return { id, car, incident };
};

setInterval(async () => {
  await delay(Math.trunc(Math.random() * 10000));
  aWss.clients.forEach((client) => {
    client.send(
      JSON.stringify({ method: "new_incident", data: getRandIncident() })
    );
  });
}, 1500);

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
);

app.listen(PORT, () => console.log("server been running"));
