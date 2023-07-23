import Garage from 'Pages/garage';
import { Routes, Route } from 'react-router-dom';
import { Scratch } from 'Pages/scratch';
import { CarPage as GarageCar } from 'Pages/garage/components/Car';
import React, { useState } from 'react';
import { ReactComponent as GarageIcon } from 'img/pageIcons/garage.svg';
import { Theme } from 'theme';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Globe } from 'img/globe.svg';
import { Head, Link, LinkIconWrapper, Line, Toggle, Moon, Sun } from 'style';
import { Dropdown } from 'Components/Dropdown';
import { changeTheme } from 'reducer';
import { useDispatch } from 'react-redux';

const App = () => {
  return (
    <Theme>
      <Header />
      <AllRoutes />
    </Theme>
  );
};
const Header = () => {
  return (
    <Head.Container>
      <Left />
      <Right />
    </Head.Container>
  );
};
const Left = () => {
  const { t } = useTranslation();
  const text = {
    garage: t('links.garage'),
    scratch: t('links.scratch'),
  };
  return (
    <Head.Left>
      <Link to={'/garage'}>
        <LinkIconWrapper>
          <GarageIcon />
        </LinkIconWrapper>
        {text.garage}
      </Link>
      <Link to={'/scratch'}>{text.scratch}</Link>
    </Head.Left>
  );
};
const Right = () => {
  return (
    <Head.Right>
      <PickLanguage />
      <PickTheme />
    </Head.Right>
  );
};
const PickLanguage = () => {
  const { i18n } = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);
  const pickLanguage = (language: string) => {
    setShowLanguages(false);
    i18n.changeLanguage(language);
  };
  return (
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
  );
};
const PickTheme = () => {
  const dispatch = useDispatch();
  const toggleTheme = () => dispatch(changeTheme());
  return (
    <Line onClick={toggleTheme}>
      <Toggle>
        <Moon />
        <Sun />
      </Toggle>
    </Line>
  );
};
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Garage />} />
      <Route path="/garage" element={<Garage />} />
      <Route path="/garage/:id" element={<GarageCar />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/scratch" element={<Scratch />} />
    </Routes>
  );
};
const NotFound = () => {
  return <>404, bruh</>;
};

export default App;
