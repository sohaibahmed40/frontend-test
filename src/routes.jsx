import { createBrowserRouter } from 'react-router-dom';
import { Home, PageNotFound } from './Pages/index.js';
import Layout from './Layout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
