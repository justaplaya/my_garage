import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Dropdown, Props as DropProps } from 'Components/Dropdown';
import { DropWrap, LinkIconWrapper } from '../../style';
import { ReactComponent as Globe } from 'img/garage/globe.svg';

export const PickLanguage = () => {
  const click = () => setShow((prev) => !prev);

  const pickLanguage = (language: Language) => {
    setShow(false);
    i18n.changeLanguage(language);
  };

  const { i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const dropdownProps: DropProps<Language> = {
    show,
    setShow,
    data: ['ru', 'en'],
    pick: pickLanguage,
    side: 'right',
  };

  return (
    <LinkIconWrapper>
      <Globe onClick={click} />
      <DropWrap>
        <Dropdown<Language> {...dropdownProps}></Dropdown>
      </DropWrap>
    </LinkIconWrapper>
  );
};
