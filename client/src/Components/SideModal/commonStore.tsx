import { Brand } from 'Pages/garage/models/car';
import { getBrandIcon } from 'Pages/garage/components/carPage/utils';

export const iconSrc = (brand: Brand | null) => getBrandIcon(brand);
