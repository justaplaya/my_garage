import { Car, Incidents } from 'Pages/garage/models/car';

export namespace Props {
  export type Common = { car: Car | null };
  export type Content = { car: Car };
  export type Graph = {
    incidents: Incidents;
  };
}
