
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import UploadSong from './routes/UploadSong';
import SearchPage from './routes/SearchPage';
import { useState } from 'react';
import './App.css';
import LoggedInHome from "./routes/LoggedInHome"
import { BrowserRouter, Routes, Route, useSearchParams, } from 'react-router-dom';
import HomeComponent from './routes/Home';
import { useCookies } from "react-cookie";
import { Navigate } from 'react-router-dom';
import MyMusic from './routes/MyMusic';
import songContext from "./contexts/songContext"
function App() {

  const [cookie, setCookie] = useCookies(["token"]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPause, setIsPause] = useState(true);
  const [soundPlayed, setIsPlayed] = useState(null);
  return (
    <div className='w-screen h-screen font-poppins'>
      <BrowserRouter>

        {cookie.token ? (
          <songContext.Provider value={{ currentSong, setCurrentSong, soundPlayed, setIsPlayed, setIsPause, isPause }}>
            <Routes>
              { /*Adding routes component   */}
              {/* //loged in routes */}
              <Route path='/' element={<div>Hello</div>} />
              <Route path='/home' element={<LoggedInHome />} />
              <Route path='/uploadSong' element={<UploadSong />} />
              <Route path='/MyMusic' element={<MyMusic />} />
              <Route path='/search' element={<SearchPage />} />
              <Route path='*' element={<Navigate to="/home" />} />
            </Routes>
          </songContext.Provider>
        ) : (
          // loged out routes
          <Routes>
            <Route path='/home' element={<HomeComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
            <Route path='*' element={<Navigate to="/login" />} />
          </Routes>
        )
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
