import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js'
import Login from './pages/Login.js'
import CreatePoetry from './pages/CreatePoetry.js'
import { useState } from 'react';
import NavBar from './Layout/NavBar.js';

function App() {

  // menyimpan data auth
  // const [isAuth, setIsAuth] = useState(false) // kalo begini setiap refresh akan nilai false
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))

  return (
   <Router>
      <NavBar udahAuth={isAuth} setIsAuth={setIsAuth}/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/createpoetry' element={<CreatePoetry />}></Route>
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}></Route>
      </Routes>
   </Router>
    
  );
}

export default App;
