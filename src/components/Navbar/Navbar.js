import React from 'react'
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom'; 

import { useAuthentication } from "../../hooks/useAuthentication" // importando dados da autenticação
import { useAuthValue } from '../../context/AuthContext'  // importando para pegar valor de contexto

export default function Navbar(){

  const {user} = useAuthValue();

  

  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink 
            to='/' 
            className={({isActive}) => (isActive ? styles.active : "") }
          >
            Home
          </NavLink>
        </li>

        {!user && ( // se user nãoe stiver logado exibe login e register
          <>
          <li>
          <NavLink 
            to='/login' 
            className={({isActive}) => (isActive ? styles.active : "") }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/register'
            className={({isActive}) => (isActive ? styles.active : "") } 
          >
            Registre-se
          </NavLink>
        </li>
          </>
        )}


        <li>
          <NavLink 
            to='/about'
            className={({isActive}) => (isActive ? styles.active : "") } 
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
