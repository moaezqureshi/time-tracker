import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import { useState } from 'react';
import Register from './Components/Register/Register';

function App() {
  const [userData, setUserData] = useState({})
  return (
    <div className="App">
      <Header />
      <div className="main">
      <Routes>
      <Route path='/login' element={<Login />} ></Route>
      <Route path='/dashboard' element={<Dashboard userData={userData} setUserData={setUserData}/>} ></Route>
      <Route path='/register' element={<Register userData={userData} setUserData={setUserData} />} ></Route>

      </Routes>
      </div>
    </div>
  );
}

export default App;
