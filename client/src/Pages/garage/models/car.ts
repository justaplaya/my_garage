export type Car = {
  id: number;
  brand: Brand;
  model: string | null;
  year: number | null;
  maxSpeed: number | null;
  timeUpTo100: number | null;
  incidents: Incidents;
};

export type Incidents = Record<IncidentType, Record<IncidentPeriod, number>>;

export type IncidentType = 'evacuation' | 'violation' | 'crash';

export type IncidentPeriod = 'week' | 'month' | 'year';

export type Brand = 'subaru' | 'mitsubishi' | 'toyota' | 'kia' | 'hyundai' | 'ssangyong' | 'haval' | 'chery' | 'exeed';
