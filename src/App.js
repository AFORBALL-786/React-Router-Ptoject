import Navbar from './components/Navbar'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import MainHeader from './pages/MainHeader';
import PrivateRoute from './components/PrivateRoute';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  return (
    <div className=' w-screen min-h-screen flex flex-col bg-richblack-900'>
      <Navbar isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn}/>

      <Routes>
        <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path='/login' element={<Login setIsloggedIn={setIsloggedIn}/>}/>
          <Route path='/signup' element={<Signup setIsloggedIn={setIsloggedIn}/>}/>
          <Route path='/dashboard' element={<PrivateRoute isLoggedIn={isLoggedIn}><Dashboard/></PrivateRoute>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
