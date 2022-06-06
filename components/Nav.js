import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className={navStyles.pushLeft}>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
