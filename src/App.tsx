import Dasboard from './pages/Dasboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Settings from './pages/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dasboard />,
    children: [
      {
        path: '/settings',
        element: <Settings />,
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
