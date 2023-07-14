import './App.css';
import Footer from './components/Footer';
import Generate from './components/GenerationsPage';
import Login from './components/Login';
import Nav1 from './components/Nav1';
import Dashboard from './components/Dashboard';
import Signup1 from './components/Signup1';
import Signup2 from './components/Signup2';
import Signup3 from './components/Signup3';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup1" element={<Signup1/>}></Route>
        <Route path="/signup2" element={<Signup2/>}></Route>
        <Route path="/signup3" element={<Signup3/>}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
        <Route path="/generate" element={<Generate/>}></Route>
        <Route path="*" element={<h1>Error Finding This Page</h1>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
