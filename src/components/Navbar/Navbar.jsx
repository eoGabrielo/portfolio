import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1>Gabriel</h1>
        <ul>
            <li>
              <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/sobre" className={({isActive}) => (isActive ? styles.active : "")}>Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/contato" className={({isActive}) => (isActive ? styles.active : "")}>Contato</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar