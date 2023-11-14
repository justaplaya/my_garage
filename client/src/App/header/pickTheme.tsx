import { useDispatch } from 'react-redux';
import { changeTheme } from 'reducer';
import { Line, Moon, Sun, Toggle } from '../style';

export const PickTheme = () => {
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
