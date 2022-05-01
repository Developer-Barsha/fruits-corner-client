import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Login from './Components/User/Login/Login';
import Register from './Components/User/Register/Register';
import RequireAuth from './Components/Shared/RequireAuth/RequireAuth';
import InventoryDetail from './Components/InventoryDetail/InventoryDetail';
import AddFruit from './Components/AddFruit/AddFruit';
import MyItems from './Components/MyItems/MyItems';

function App() {
  return (
    <div>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/inventory/:id' element={<RequireAuth><InventoryDetail /></RequireAuth>}></Route>
        <Route path='/addfruit' element={<AddFruit />}></Route>
        <Route path='/myitems' element={<MyItems />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
