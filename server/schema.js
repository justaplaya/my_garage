const { buildSchema } = require("graphql");

const schema = buildSchema(`

type IncidentData {
    week: Float
    month: Float
    year: Float
}

type Incidents {
    evacuation: IncidentData
    violation: IncidentData
    crash: IncidentData
}

type Car {
    id: ID
    brand: String!
    model: String
    year: Float
    maxSpeed: Float
    timeUpTo100: Float
    incidents: Incidents
}

input CarInput {
    id: ID
    brand: String!
    model: String
    year: Float
    maxSpeed: Float
    timeUpTo100: Float
}

input UpdateCarInput {
    id: ID!
    brand: String
    model: String
    year: Float
    maxSpeed: Float
    timeUpTo100: Float
}

input IdInput {
    id: ID!
}

type Query {
    getAllCars: [Car]
    getOneCar(id: ID): Car
}

type Mutation {
    createCar(input: CarInput): Car
    updateCar(input: UpdateCarInput): Car
    deleteCar(input: IdInput): Car
}

`);

module.exports = schema;
