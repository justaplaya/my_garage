import { GlobalThemeType, ThemeWrapper, useTheme } from 'theme';
import { Header } from './header';
import { AllRoutes } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorBoundary } from 'Components/ErrorBoundary';
import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
const App = () => {
  const mychange = 59;
  return (
    <ChakraProvider>
      <ErrorBoundary>
        <ThemeWrapper>
          <Header />
          <AllRoutes />
          <ToastContainer
            position="top-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </ThemeWrapper>
      </ErrorBoundary>
    </ChakraProvider>
  );
};

export default App;
