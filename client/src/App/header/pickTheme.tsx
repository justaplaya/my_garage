import { useDispatch } from 'react-redux';
import { SharedActions } from 'reducer/shared';
import { Line, Moon, Sun, Toggle } from '../style';

export const PickTheme = () => {
  const dispatch = useDispatch();

  const toggleTheme = () => dispatch(SharedActions.changeTheme());

  return (
    <Line onClick={toggleTheme}>
      <Toggle>
        <Moon />
        <Sun />
      </Toggle>
    </Line>
  );
};
