import { Brand } from 'Pages/garage/models/car';
import { getBrandIcon } from 'Pages/garage/components/Car/utils';

export const iconSrc = (brand: Brand | null) => getBrandIcon(brand);
