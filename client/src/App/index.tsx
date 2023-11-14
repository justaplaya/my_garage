import { Theme } from 'theme';
import { Header } from './header';
import { AllRoutes } from './routes';

const App = () => {
  return (
    <Theme>
      <Header />
      <AllRoutes />
    </Theme>
  );
};

export default App;
