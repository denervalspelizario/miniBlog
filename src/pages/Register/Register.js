import {useState, useEffect} from 'react';
import styles from './Register.module.css';

export default function Register(){
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas historias</p>
      <form>
        <label>
          <span>Nome: </span>
          <input 
            type="text"
            name='displayName'
            required
            placeholder='Nome do usuário'
           />
        </label>

        <label>
          <span>E-mail: </span>
          <input 
            type="email"
            name='email'
            required
            placeholder='Email do usuário'
           />
        </label>

        <label>
          <span>Senha: </span>
          <input 
            type="password"
            name='password'
            required
            placeholder='Insira sua senha'
           />
        </label>

        <label>
          <span>Conforme a sua senha: </span>
          <input 
            type="password"
            name='confirmPassword'
            required
            placeholder='Confirme a  sua senha'
           />
        </label>
        <button className='btn' >Cadastrar</button>
      </form>
    </div>
  )
}