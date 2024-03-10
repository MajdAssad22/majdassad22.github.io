// React
import React, { useLayoutEffect, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

// CSS & Media
import './App.css';

// Pages
import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';
import ContactPage from './pages/contact-page';

// Components
import Loader from './components/loader';
import MainLayout from './components/main-layout';
import PortfolioPage from './pages/portfolio-page';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='bg-dark'>
      {loading ? (
        <Loader isScreenLoader={true}/>
      ) : (
        <BrowserRouter>
          <Wrapper>
            <Routes>
              <Route path='/' element={<MainLayout/>}>
                <Route index element={<HomePage />} />
              </Route>
              <Route path='/about' element={<MainLayout/>}>
                <Route index element={<AboutPage />} />
              </Route>
              <Route path='/contact' element={<MainLayout/>}>
                <Route index element={<ContactPage />} />
              </Route>
              <Route path='/portfolio' element={<MainLayout/>}>
                <Route index element={<PortfolioPage />} />
              </Route>
            </Routes>
          </Wrapper>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
