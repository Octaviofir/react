import style from './NavBar.module.css';
import { useNavigate } from 'react-router-dom';


function NavBar() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');

  };
  return (
    <>
      <div className={style['main-header']}>
        <div className={style.logoWrapper} onClick={goHome}>
           <div className={style.logo}></div>
        </div>
        <nav className={style.menuWrapper}>
            <ul className={style.mainMenu}>
              <li><a href="#">Seating</a></li>
              <li><a href="#">Living Room</a></li>
              <li><a href="#">Outdoor</a></li>
              <li><a href="#">Bedroom</a></li>
              <li><a href="#">Storage</a></li>

            </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;