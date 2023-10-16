import { Incident } from '../../models/incident';

export namespace Props {
  export type List = { incidents: Incident[] };
  export type Card = { incident: Incident };
}
