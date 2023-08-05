import {gql} from '@apollo/client';

export const GET_ALL_CARS = gql`
query {
    getAllCars {
        id, brand, model, year, maxSpeed, timeUpTo100, incidents { evacuation { week month year }  violation { week month year }  crash { week month year } }
    }
}
`;

export const GET_ONE_CAR = gql`
query getOneCar($id: ID){
    getOneCar(id: $id){
        id, brand, model, year, maxSpeed, timeUpTo100, incidents { evacuation { week month year }  violation { week month year }  crash { week month year } }
    }
} 
`;