import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { GameS } from './pages/game';
import { HomeCategory } from './pages/homeCategory';
import { Login } from './pages/login';
import { Admin } from './pages/admin';
import { RequireAuth } from './contexts/Auth/RequireAuth';


function App() {
  

  return (

    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/page/:id' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<RequireAuth><Admin/></RequireAuth>} />
        <Route path='/:game' element={<GameS/>} />
        <Route path='/category/:category' element={<HomeCategory/>} />
        <Route path='/category/:category/page/:id' element={<HomeCategory/>} />
        
        
      </Routes>
    </div>
  );
}

export default App;
