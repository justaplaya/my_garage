export type CarType = {
  id: number;
  brand: Brand;
  model: string | null;
  year: number | null;
  maxSpeed: number | null;
  timeUpTo100: number | null;
};
export type Brand = 'subaru' | 'mitsubishi' | 'toyota' | 'kia' | 'hyundai' | 'ssangyong' | 'haval' | 'chery' | 'exeed';
export const brands: Brand[] = [
  'subaru',
  'mitsubishi',
  'toyota',
  'kia',
  'hyundai',
  'ssangyong',
  'haval',
  'chery',
  'exeed',
];
