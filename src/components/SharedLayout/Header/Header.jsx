import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.mainTitle}>The Kyiv Times</h1>
    </header>
  );
};

export default Header;
