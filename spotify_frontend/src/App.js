
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import UploadSong from './routes/UploadSong';

import './App.css';
import LoggedInHome from "./routes/LoggedInHome"
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import HomeComponent from './routes/Home';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
import MyMusic from './routes/MyMusic';
function App() {
  const [cookie, setCookie] = useCookies("token");
  return (
    <div className='w-screen h-screen font-poppins'>
      <BrowserRouter>

        {cookie.token ? (
          <Routes>
            { /*Adding routes component   */}
            {/* //loged in routes */}
            <Route path='/' element={<div>Hello</div>} />
            <Route path='/home' element={<LoggedInHome />} />
            <Route path='/uploadSong' element={<UploadSong/> } />
            <Route path='/MyMusic' element={<MyMusic/> } />
            <Route path='*' element={<Navigate to="/home" />} />
          </Routes>
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
