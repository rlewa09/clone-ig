import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import * as ALL_ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/Login'));

function App() {
  console.log({ Login });
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route exact path={ALL_ROUTES.LOGIN} element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
    // <p>hello</p>
  );
}

export default App;
