import { IncidentPeriod, IncidentType } from 'Pages/garage/models/car';
import { incidentTypes, periods } from 'Pages/garage/config';

export const isPeriod = (arg): arg is IncidentPeriod => periods.includes(arg);
export const isIncidentType = (arg): arg is IncidentType => incidentTypes.includes(arg);
