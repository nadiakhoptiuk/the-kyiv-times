import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import s from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={s.mainBox}>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default SharedLayout;
