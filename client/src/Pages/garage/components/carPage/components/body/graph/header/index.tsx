import { periods } from 'Pages/garage/config';
import { Props } from '../types';
import { useHeader } from './useHeader';
import { Container, Title, ActiveLine, Period, Periods } from './style';

export const Header = (_props: Props.Header) => {
  const { text, props } = useHeader(_props);

  return (
    <Container>
      <Title>{text.title}</Title>
      <Periods>
        {periods.map((item, index) => (
          <Period {...props.period(item)} key={index}>
            {text.periods(item)}
          </Period>
        ))}
        <ActiveLine {...props.activeLine} />
      </Periods>
    </Container>
  );
};
