import {gql} from '@apollo/client'

export const CREATE_CAR = gql`

mutation createCar($input: CarInput) {
    createCar(input: $input) {
        id, brand, model, year, maxSpeed, timeUpTo100
    }
}

`
export const UPDATE_CAR = gql`
mutation updateCar($input: UpdateCarInput) {
    updateCar(input: $input) {
        id, brand, model, year, maxSpeed, timeUpTo100
    }
}
`
export const DELETE_CAR = gql`
mutation deleteCar($input: IdInput) {
    deleteCar(input: $input) {
        id, brand, model, year, maxSpeed, timeUpTo100
    }
}
`