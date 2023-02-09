import Dasboard from './pages/Dasboard';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Settings from './pages/Settings';
import Index from './pages/Index';
import Resources from './pages/Resources';
import Auth from './pages/Auth';
import { useAppSelector } from './app/hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddEditCategory from './pages/AddEditCategory';
import AddEditQuestion from './pages/AddEditQuestion';
import AddEditUser from './pages/AddEditUser';

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

function App() {
  const { isAuth } = useAppSelector((state) => state.auth);
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute auth={isAuth}>
                <Dasboard />
              </ProtectedRoute>
            }
          >
            <Route index={true} element={<Index />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/resources" element={<Resources />} />

            <Route path="/category">
              <Route path="new" element={<AddEditCategory />} />
              <Route path=":id/edit" element={<AddEditCategory />} />
            </Route>
            <Route path="/question">
              <Route path="new" element={<AddEditQuestion />} />
              <Route path=":id/edit" element={<AddEditQuestion />} />
            </Route>

            <Route path="/user">
              <Route path="new" element={<AddEditUser />} />
            </Route>
          </Route>
          <Route
            path="/auth"
            element={
              <PublicRoute auth={isAuth}>
                <Auth />
              </PublicRoute>
            }
          />
          <Route path="*" element={'404'} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
