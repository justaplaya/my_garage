import { ThemeWrapper } from 'theme';
import { Header } from './header';
import { AllRoutes } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorBoundary } from 'Components/ErrorBoundary';

const App = () => {
  return (
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
  );
};

export default App;
