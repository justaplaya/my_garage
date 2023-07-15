const {buildSchema}=require('graphql')

const schema =buildSchema(`

type Car {
    id: ID
    brand: String!
    model: String
    year: Float
    maxSpeed: Float
    timeUpTo100: Float
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

`)

module.exports=schema