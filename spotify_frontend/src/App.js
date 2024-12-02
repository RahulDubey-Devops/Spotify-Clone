
import Login from './routes/Login';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


function App() {
  return (
    <div className='w-screen h-screen'>
      <BrowserRouter>
        <Routes>
          { /*Adding routes component   */}
          <Route path='/' element={
            <div>Hello</div>
          } />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
