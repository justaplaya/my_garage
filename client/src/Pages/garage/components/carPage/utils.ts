import { Brand } from 'Pages/garage/models/car';
import { Country } from 'Pages/garage/types';

export const getBrandIcon = (brand: Brand | null) => {
  switch (brand) {
    case 'subaru':
      return 'https://raw.githubusercontent.com/justaplaya/my_garage/e6d302c72b857a9f259a8b3cb7cd757ef99d64aa/client/src/img/garage/brands/subaru.png';
    case 'mitsubishi':
      return 'https://raw.githubusercontent.com/justaplaya/my_garage/e6d302c72b857a9f259a8b3cb7cd757ef99d64aa/client/src/img/garage/brands/mitsubishi.png';
    case 'toyota':
      return 'https://raw.githubusercontent.com/justaplaya/my_garage/e6d302c72b857a9f259a8b3cb7cd757ef99d64aa/client/src/img/garage/brands/toyota.png';
    case 'kia':
      return 'https://raw.githubusercontent.com/justaplaya/my_garage/e6d302c72b857a9f259a8b3cb7cd757ef99d64aa/client/src/img/garage/brands/kia.png';
    case 'hyundai':
      return 'https://raw.githubusercontent.com/justaplaya/my_garage/e6d302c72b857a9f259a8b3cb7cd757ef99d64aa/client/src/img/garage/brands/hyundai.png';
    case 'ssangyong':
      return 'https://raw.githubusercontent.com/justaplaya/my_garage/e6d302c72b857a9f259a8b3cb7cd757ef99d64aa/client/src/img/garage/brands/ssangyong.png';
    case 'haval':
      return 'https://raw.githubusercontent.com/justaplaya/my_garage/e6d302c72b857a9f259a8b3cb7cd757ef99d64aa/client/src/img/garage/brands/haval.png';
    case 'chery':
      return 'https://raw.githubusercontent.com/justaplaya/my_garage/e6d302c72b857a9f259a8b3cb7cd757ef99d64aa/client/src/img/garage/brands/chery.png';
    case 'exeed':
      return 'https://raw.githubusercontent.com/justaplaya/my_garage/e6d302c72b857a9f259a8b3cb7cd757ef99d64aa/client/src/img/garage/brands/exeed.png';
    default:
      return 'https://raw.githubusercontent.com/justaplaya/my_garage/e6d302c72b857a9f259a8b3cb7cd757ef99d64aa/client/src/img/garage/brands/noName.webp';
  }
};

export const getCountryBg = (country: Country) => {
  switch (country) {
    case 'japan':
      return 'https://raw.githubusercontent.com/justaplaya/my_garage/e6d302c72b857a9f259a8b3cb7cd757ef99d64aa/client/src/img/garage/countries/japan.webp';
    case 'korea':
      return 'https://raw.githubusercontent.com/justaplaya/my_garage/e6d302c72b857a9f259a8b3cb7cd757ef99d64aa/client/src/img/garage/countries/korea.webp';
    case 'china':
      return 'https://raw.githubusercontent.com/justaplaya/my_garage/e6d302c72b857a9f259a8b3cb7cd757ef99d64aa/client/src/img/garage/countries/china.webp';
    default:
      return '';
  }
};
