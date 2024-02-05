import { Props } from '../types';
import { Input } from 'Components/Input';
import { TextArea } from 'Components/TextArea';

export const Content = ({ inputs }: Props.Content) => {
  const { title, description } = inputs;

  return (
    <>
      <Input value={title.value} onChange={(e) => title.onChange(e)} />
      <TextArea value={description.value} onChange={description.onChange} />
    </>
  );
};
