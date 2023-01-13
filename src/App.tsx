import Dasboard from './pages/Dasboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Settings from './pages/Settings';
import Index from './pages/Index';
import Resources from './pages/Resources';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dasboard />,
    children: [
      {
        index: true,
        element: <Index />,
      },

      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/resources',
        element: <Resources />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
