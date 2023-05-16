import {useState, useEffect} from 'react';
import styles from './Register.module.css';

export default function Register(){

  const [displayName, setDisplayName] = useState(""); // states de inputs
  const [email, setEmail] = useState(""); // states de inputs
  const [password, setPassword] = useState(""); // states de inputs
  const [confirmPassword, setConfirmPassword] = useState(""); // states de inputs
  const [error, setError] = useState(""); // states de erro

  const handleSubmit = (e) => {  // e de event 
    e.preventDefault() // garantindo que ao clicar no form não atualize
    
    setError("") // zerando os erros
    
    const user = {  //objeto chamado user com 3 states dos inputs
      displayName,
      email,
      password
    }

    if(password !== confirmPassword){             // validacao se user digitar nas states de password senhas difrentes
      setError("As senhas precisam ser iguais!")  // adiciona a state de erro msg de erro
      return
    }
  }


  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas historias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome: </span>
          <input 
            type="text"
            name='displayName'
            required
            placeholder='Nome do usuário'
            value={displayName} // input recebendo state inicial
            onChange={(e) => setDisplayName(e.target.value)} // ao digitar dado vai pra state
           />
        </label>

        <label>
          <span>E-mail: </span>
          <input 
            type="email"
            name='email'
            required
            placeholder='Email do usuário'
            value={email} // input recebendo state inicial
            onChange={(e) => setEmail(e.target.value)} // ao digitar dado vai pra state
           />
        </label>

        <label>
          <span>Senha: </span>
          <input 
            type="password"
            name='password'
            required
            placeholder='Insira sua senha'
            value={password} // input recebendo state inicial
            onChange={(e) => setPassword(e.target.value)} // ao digitar dado vai pra state
           />
        </label>

        <label>
          <span>Conforme a sua senha: </span>
          <input 
            type="password"
            name='confirmPassword'
            required
            placeholder='Confirme a  sua senha'
            Villa Music
            value={confirmPassword} // input recebendo state inicial
            onChange={(e) => setConfirmPassword(e.target.value)} // ao digitar dado vai pra state
           />
        </label>
        <button className='btn' >Cadastrar</button>
        
        {error && // deu erro retorna erro
          <p className='error'>{error}</p> 
        }
      </form>
    </div>
  )
}