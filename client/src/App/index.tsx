import { Theme } from 'theme';
import { Header } from './header';
import { AllRoutes } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorBoundary } from 'Components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Theme>
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
      </Theme>
    </ErrorBoundary>
  );
};

export default App;
