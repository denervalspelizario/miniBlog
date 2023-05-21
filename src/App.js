import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { onAuthStateChanged } from "firebase/auth"; // funcao que mapeia se autenticação foi feita com sucesso



// context
import { AuthProvider } from "./context/AuthContext";  // importando o contexto auth para usar nas pages

// hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {

  const [ user, setUser ] = useState(undefined); // state que inicia com undefined ou seja inicalmente não tem usuario
  const {auth} = useAuthentication();

  const loadingUser = user === undefined // loadingUser receber a comparação da state user se é igual undefined ou não

  useEffect(() => {

    onAuthStateChanged(auth, (user) => { // funcao onAuth recebe os dados de autenticação(auth) 

      setUser(user) // e adiciona esses dados de autenticação no state user

    })

  }, [auth]) // sempre que mudar a autenticação aciona essa função



  if( loadingUser ){ // se estiver carregando usuario 

    return <p>Carregando...</p> // retorna Carregando

  }

  return (
    <div className="App">
      <AuthProvider value={{ user }} > {/* contexto auth que abraça todas as pages */}
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
