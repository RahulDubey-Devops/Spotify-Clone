
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import HomeComponent from './routes/Home';

function App() {
  return (
    <div className='w-screen h-screen font-poppins'>
      <BrowserRouter>
        <Routes>
          { /*Adding routes component   */}
          <Route path='/' element={
            <div>Hello</div>
          } />
          <Route path="/login" element={<LoginComponent/>} />
          <Route path="/signup" element={<SignupComponent/>} />
          <Route path='/home' element={<HomeComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
