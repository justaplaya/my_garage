const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const { GraphQLError } = require("graphql/error");

const cars = [
  {
    id: 1,
    brand: "subaru",
    model: "Impreza 2003",
    year: 2005,
    maxSpeed: 329,
    timeUpTo100: 2.3,
  },
  {
    id: 2,
    brand: "chery",
    model: null,
    year: null,
    maxSpeed: null,
    timeUpTo100: null,
  },
  {
    id: 3,
    brand: "mitsubishi",
    model: "Lancer Evo VII",
    year: 2002,
    maxSpeed: 305,
    timeUpTo100: 2.7,
  },
  {
    id: 4,
    brand: "hyundai",
    model: "accent",
    year: 2007,
    maxSpeed: 294,
    timeUpTo100: 3.1,
  },
];

const app = express();
app.use(cors());

const createCar = (input) => {
  const id = Date.now();
  return {
    id,
    ...input,
  };
};
const updateCar = (input) => {
  return cars.find((car) => car.id === input.id);
};
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
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
    const car = createCar(input);
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
    // TODO а можно вообще ничего не возв ращать?)
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
);

app.listen(5000, () => console.log("server been running"));
