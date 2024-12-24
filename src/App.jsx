import './App.css';
import router from './routes.jsx';
import './config/axios';
import { Suspense } from 'react';
import { Loader } from './components';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
