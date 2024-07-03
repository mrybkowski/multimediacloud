import React, { Suspense, useState } from 'react';
import './App.css';
import './utils/i18n/config';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const NotFound = React.lazy(() => import('./pages/notFound/NotFound'));
const LazyHome = React.lazy(() => import('./pages/home/Home'));
const LazyLogin = React.lazy(() => import('./pages/login/Login'));

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  return (
    <div className="App select-none">
        <BrowserRouter>
          <Suspense fallback={<div>Ładowanie...</div>}>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={isLoggedIn ? <LazyHome /> : <NotFound />} />
              <Route path="/login" element={<LazyLogin />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
    </div>
  );
}

export default App;
