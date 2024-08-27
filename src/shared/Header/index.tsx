import Container from '../Container';
import style from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <Container>
      <header className={style.header}>
        <div className={style.logo}>
          <a href="/">Logo</a>
        </div>
        <nav className={style.nav}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/contacts">Contacts</a>
            </li>
            <li>
              <a href="/create-event">+ Add new event</a>
            </li>
          </ul>
        </nav>
        <div className={style.menuToggle}>
          <button className={style.menuBtn}>☰</button>
        </div>
      </header>
    </Container>
  );
};

export default Header;
