import React, { Suspense, useState } from 'react';
import './App.css';
import './i18n/config';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const NotFound = React.lazy(() => import('./pages/notFound/NotFound'));
const LazyHome = React.lazy(() => import('./pages/home/Home'));

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Ładowanie...</div>}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={isLoggedIn ? <LazyHome /> : <NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
