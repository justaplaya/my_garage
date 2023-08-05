import { ChangeEvent, useContext } from 'react';
import { InputOrTextArea } from 'utils/types';
import { CreateCtx } from '../ctx';
import { iconSrc } from '../useCreateUpdate';
import { Brand } from '../../../models/car';

export const useContent = () => {
  const ctxData = useContext(CreateCtx);
  const { text, showBrandSelect, setShowBrandSelect, localLoading, brand, brands } = ctxData;

  const brandIcon = iconSrc(brand.value);

  const getSource = (name: string) => ctxData[name];

  const change = (arg: ChangeEvent<InputOrTextArea>) => {
    const { value, name } = arg.target;
    const isValid = () => {
      switch (name) {
        case 'year':
          return !isNaN(Number(value)) && value.length <= 4;
        case 'maxSpeed':
          return !isNaN(Number(value)) && value.length <= 3;
        case 'timeUpTo100':
          return !isNaN(Number(value)) && value.length <= 5;
        default:
          return true;
      }
    };
    isValid() && getSource(name).change(arg);
  };

  const props = {
    brand: {
      show: showBrandSelect,
      setShow: setShowBrandSelect,
      pick: (value: Brand) => brand.change(value),
      picked: brand.value,
      disabled: localLoading,
      data: brands,
      placeholder: text.brand,
    },
    input: (code: string) => {
      return {
        disabled: localLoading,
        value: getSource(code).value,
        onChange: (event) => change(event),
        placeholder: text[code],
        name: code,
      };
    },
  };

  return { props, brandIcon };
};
