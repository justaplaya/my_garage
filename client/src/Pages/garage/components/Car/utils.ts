import Subaru from 'img/garage/brands/subaru.png';
import Mitsubishi from 'img/garage/brands/mitsubishi.png';
import Toyota from 'img/garage/brands/toyota.png';
import Kia from 'img/garage/brands/kia.png';
import Hyundai from 'img/garage/brands/hyundai.png';
import Ssangyong from 'img/garage/brands/ssangyong.png';
import Haval from 'img/garage/brands/haval.png';
import Chery from 'img/garage/brands/chery.png';
import Exeed from 'img/garage/brands/exeed.png';
import NoName from 'img/garage/brands/noName.webp';
import Japan from 'img/garage/countries/japan.webp';
import Korea from 'img/garage/countries/korea.webp';
import China from 'img/garage/countries/china.webp';
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
