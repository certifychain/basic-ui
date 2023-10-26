import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from "./home";
import Login from "./login";
import Register from "./register";
import Validation from "./validation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="validation" element={<Validation />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App; 
