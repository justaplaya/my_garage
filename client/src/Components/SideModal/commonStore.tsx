import { CarBrandType } from 'Pages/garage/types';
import { GetBrandIcon } from 'utils/Car';

export const iconSrc = (brand: CarBrandType | null) => GetBrandIcon(brand);
