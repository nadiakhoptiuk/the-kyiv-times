import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Spinner from 'components/Spinner';
import s from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={s.mainBox}>
      <Header />

      <main>
        <Suspense fallback={<Spinner />}>
          <div>
            <Outlet />
          </div>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default SharedLayout;
