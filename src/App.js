import logo from './logo.svg';
import './css/App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import  LoginPage from './pages/LoginPage';
import { Dashboard } from './pages/dashboard.js';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/register" element={<RegisterPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
