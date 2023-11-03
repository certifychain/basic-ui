import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Base from "./base";
import Login from "./login";
import Register from "./register";
import Validation from "./validation";
import Home from "./home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="validation" element={<Validation />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
