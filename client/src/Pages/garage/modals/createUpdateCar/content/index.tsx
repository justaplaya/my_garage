import { Select } from 'Components/Select';
import { Input } from 'Components/Input';
import { Brand } from '../../../models/car';
import { useContent } from './useContent';
import { Icon } from './style';

export const Content = () => {
  const { props, brandIcon } = useContent();

  return (
    <>
      <Icon src={brandIcon} />
      <Select<Brand> {...props.brand} />
      <Input {...props.input('model')} />
      <Input {...props.input('year')} />
      <Input {...props.input('maxSpeed')} />
      <Input {...props.input('timeUpTo100')} />
    </>
  );
};
