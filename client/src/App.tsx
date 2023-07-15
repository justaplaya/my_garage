import Garage from 'Pages/garage';
import { Routes, Route, matchPath, NavLink, useLocation } from 'react-router-dom';
import { Scratch } from './Pages/scratch';
import { GlobalNotFound } from './Pages/GlobalNotFound';
import { Car as GarageCar } from './Pages/garage/Car';
import { NavigateTo } from './utils/NavigateTo';
import styled, { css } from 'styled-components';
import React, { Suspense, useContext, useState } from 'react';
import { ReactComponent as GarageIcon } from 'img/pageIcons/garage.svg';
import { Theme } from './theme';
import { GlobalContext } from './globalContext';
import MoonIcon from 'img/moon.png';
import SunIcon from 'img/sun.png';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Globe } from 'img/globe.svg';
import { Header, Link, LinkIconWrapper, Line, Toggle, Moon, Sun } from './style';
import { AllCarBrands } from './utils';
import { CarBrandType } from './Pages/garage/types';
import { Dropdown } from './Components/Dropdown';
const App = () => {
  const { toggleTheme } = useContext(GlobalContext);
  const { t, i18n } = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);
  const pickLanguage = (language: string) => {
    setShowLanguages(false);
    i18n.changeLanguage(language);
  };

  return (
    <Theme>
      <Header.Container>
        <Header.Left>
          <Link to={'/garage'}>
            <LinkIconWrapper>
              <GarageIcon />
            </LinkIconWrapper>
            {t('links.garage')}
          </Link>
          <Link to={'/scratch'}>{t('links.scratch')}</Link>
        </Header.Left>
        <Header.Right>
          <LinkIconWrapper $side={'70px'}>
            <Globe onClick={() => setShowLanguages((prev) => !prev)} />
            <Dropdown
              width={'inherit'}
              show={showLanguages}
              data={['ru', 'en']}
              pick={(language) => pickLanguage(language)}
              upperCase
              padding={'20px'}
              side={'right'}
              textWidth={'100%'}
            />
          </LinkIconWrapper>
          <Line onClick={toggleTheme}>
            <Toggle>
              <Moon />
              <Sun />
            </Toggle>
          </Line>
        </Header.Right>
      </Header.Container>
      <Routes>
        <Route path="/" element={<NavigateTo to="/garage" />} />
        <Route path="/garage" element={<Garage />} />
        <Route path="/garage/:id" element={<GarageCar />} />
        <Route path="*" element={<GlobalNotFound />} />
        <Route path="/scratch" element={<Scratch />} />
      </Routes>
    </Theme>
  );
};

export default App;
