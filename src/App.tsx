import Dasboard from './pages/Dasboard';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Settings from './pages/Settings';
import Index from './pages/Index';
import Resources from './pages/Resources';
import Auth from './pages/Auth';
import AddCategory from './components/AddCategory';

interface PRProps {
  auth: boolean;
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<PRProps> = ({ auth, children }) => {
  return auth ? children : <Navigate to="/auth" replace />;
};

const PublicRoute: React.FC<PRProps> = ({ auth, children }) => {
  return auth ? <Navigate to="/" replace /> : children;
};

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
  {
    path: '/auth',
    element: <Auth />,
  },
]);

function App() {
  return (
    <>
      <AddCategory />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
