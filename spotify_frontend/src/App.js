
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
