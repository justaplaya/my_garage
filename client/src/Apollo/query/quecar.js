import {gql} from '@apollo/client';

export const GET_ALL_CARS = gql`
query {
    getAllCars {
        id, brand, model, year, maxSpeed, timeUpTo100
    }
}
`;

export const GET_ONE_CAR = gql`
query getOneCar($id: ID){
    getOneCar(id: $id){
        id, brand, model, year, maxSpeed, timeUpTo100
    }
} 
`;