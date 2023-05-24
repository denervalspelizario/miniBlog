import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {

  const [ user, setUser ] = useState(undefined); // state que inicia com undefined ou seja inicalmente não tem usuario
  const {auth} = useAuthentication();

  const loadingUser = user === undefined // loadingUser receber a comparação da state user se é igual undefined ou não

  useEffect(() => {

    onAuthStateChanged(auth, (user) => { // funcao onAuth recebe os dados de autenticação(auth) 

      setUser(user) // e adiciona esses dados de autenticação no state user

    })

  }, [auth]) // sempre que mudar a autenticação aciona essa função



  // condicional se user estiver carregando
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
                <Route  
                  path="/login" 
                  element={ !user ? <Login /> : <Navigate to='/'/>  // se user não estiver logado e tentar entrar em login ele vai pra home 
                }/>
                <Route  
                  path="/register" 
                  element={ !user ? <Register /> : <Navigate to='/'/>
                }/>
                <Route 
                  path="/posts/create" 
                  element={ user ? <CreatePost /> : <Navigate to='/login'/> // se user não estiver logado e tentar entrar em createpost ele vai pra tela login
                }/>
                <Route 
                  path="/dashboard" 
                  element={ user ? <Dashboard /> : <Navigate to='/login'/> // se user não estiver logado e tentar entrar em dashboard ele vai pra login
                }/>
              </Routes>
            </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
