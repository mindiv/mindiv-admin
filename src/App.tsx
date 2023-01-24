import Dasboard from './pages/Dasboard';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Settings from './pages/Settings';
import Index from './pages/Index';
import Resources from './pages/Resources';
import Auth from './pages/Auth';
import NewCategory from './pages/NewCategory';
import NewCollection from './pages/NewCollection';
import NewQuestion from './pages/NewQuestion';
import NewUser from './pages/NewUser';
import { useAppSelector } from './app/hooks';

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
            <Route path="/new/category" element={<NewCategory />} />
            <Route path="/new/collection" element={<NewCollection />} />
            <Route path="/new/question" element={<NewQuestion />} />
            <Route path="/new/user" element={<NewUser />} />
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
