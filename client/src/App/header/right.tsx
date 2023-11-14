import { Head } from '../style';
import { PickTheme } from './pickTheme';
import { PickLanguage } from './pickLanguage';

export const Right = () => {
  return (
    <Head.Right>
      <PickLanguage />
      <PickTheme />
    </Head.Right>
  );
};
