import Nav from './Nav';
import Header from './Header';

import Styles from '../styles/Layout.module.css';
import Meta from './Meta';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={Styles.container}>
        <main className={Styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
