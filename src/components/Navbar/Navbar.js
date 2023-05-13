import React from 'react'
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom'; 

export default function Navbar(){
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
