import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Navbar from './components/Home/Navbar/Navigation';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider';


function App() {
  return (
    <div className="App"> 
    <AuthProvider>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
       </BrowserRouter>  
       </AuthProvider>   
    </div>
  );
}

export default App;
