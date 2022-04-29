import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
