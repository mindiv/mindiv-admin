import Dasboard from './pages/Dasboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Settings from './pages/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dasboard />,
  },
  {
    path: '/settings',
    element: <Settings />,
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
