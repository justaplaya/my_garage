import Subaru from 'img/carBrands/subaru.png';
import Mitsubishi from 'img/carBrands/mitsubishi.png';
import Toyota from 'img/carBrands/toyota.png';
import Kia from 'img/carBrands/kia.png';
import Hyundai from 'img/carBrands/hyundai.png';
import Ssangyong from 'img/carBrands/ssangyong.png';
import Haval from 'img/carBrands/haval.png';
import Chery from 'img/carBrands/chery.png';
import Exeed from 'img/carBrands/exeed.png';
import NoName from 'img/carBrands/noName.webp';
import Japan from 'img/countries/background/japan.webp';
import Korea from 'img/countries/background/korea.webp';
import China from 'img/countries/background/china.webp';
import { Brand } from 'Pages/garage/models/car';
import { Country } from 'Pages/garage/types';

export const getBrandIcon = (brand: Brand | null) => {
  switch (brand) {
    case 'subaru':
      return Subaru;
    case 'mitsubishi':
      return Mitsubishi;
    case 'toyota':
      return Toyota;
    case 'kia':
      return Kia;
    case 'hyundai':
      return Hyundai;
    case 'ssangyong':
      return Ssangyong;
    case 'haval':
      return Haval;
    case 'chery':
      return Chery;
    case 'exeed':
      return Exeed;
    default:
      return NoName;
  }
};

export const getCountryBg = (country: Country) => {
  switch (country) {
    case 'japan':
      return Japan;
    case 'korea':
      return Korea;
    case 'china':
      return China;
    default:
      return '';
  }
};
