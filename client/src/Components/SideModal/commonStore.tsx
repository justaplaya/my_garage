import { Brand } from 'Pages/garage/models/car';
import { GetBrandIcon } from 'utils/Car';

export const iconSrc = (brand: Brand | null) => GetBrandIcon(brand);
