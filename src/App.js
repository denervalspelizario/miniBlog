import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

// context
import { AuthProvider } from "./context/AuthContext";  // importando o contexto auth para usar nas pages


// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider> {/* contexto auth que abraça todas as pages */}
        <BrowserRouter>
          <Navbar/>
            <div className="container">
              <Routes>
                <Route  path="/" element={<Home />} />
                <Route  path="/about" element={<About />} />
                <Route  path="/login" element={<Login />} />
                <Route  path="/register" element={<Register />} />
              </Routes>
            </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
