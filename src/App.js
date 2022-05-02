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
import ManageItems from './Components/ManageItems/ManageItems';
import NotFound from './Components/NotFound/NotFound';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/inventory/:id' element={<RequireAuth> <InventoryDetail /> </RequireAuth>}></Route>
        <Route path='/addfruit' element={<RequireAuth> <AddFruit /> </RequireAuth>}></Route>
        <Route path='/myitems' element={<RequireAuth> <MyItems /> </RequireAuth>}></Route>
        <Route path='/manageitems' element={<RequireAuth> <ManageItems /> </RequireAuth>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
