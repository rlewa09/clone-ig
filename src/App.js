import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import * as ALL_ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const NotFound = lazy(() => import('./pages/Notfound'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route exact path={ALL_ROUTES.LOGIN} element={<Login />} />
          <Route exact path={ALL_ROUTES.SIGNUP} element={<Signup />} />
          <Route exact path={ALL_ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
