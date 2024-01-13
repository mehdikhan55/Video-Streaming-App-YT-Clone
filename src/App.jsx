import React, { useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import { ThemeProvider } from './utils/ThemeContext';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Video from './pages/Video';
import SearchPage from './pages/SearchPage';
import SignIn from './pages/SignIn';

function App() {

  return (
    <ThemeProvider>

      <div className='app'>
        <BrowserRouter>
          <Header />
          <main className="main_page">
            <Sidebar />
            <Routes>
              <Route path="/" >
                <Route index element={<Home />} />
                <Route path="siginin" element={<SignIn />} />
                <Route path="Search/:searchTerm" element={<SearchPage />} />
                <Route path="video">
                  <Route path=":videoId" element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </ThemeProvider>

  );
}

export default App;
