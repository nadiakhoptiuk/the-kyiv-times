import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <p className={s.copyright}>&copy; The Kyiv Times | 2023</p>
    </footer>
  );
};

export default Footer;
