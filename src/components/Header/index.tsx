import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

import * as C from './styles';

function logout() {
  Cookies.remove('token');
  window.location.href = '/';
}

function Header() {
  const isLogged = Cookies.get('token');

  return ( 
    <C.Header>
      <C.Container>
        <Link to={'/'} className='header__logo header__a'>
          Ustore
        </Link>
        <nav className='header__nav'>
          <ul className='header__ul'>
            {isLogged && 
              <>
                <li className='header__li'>
                  <Link className='header__a--white' to={'/my-ads'}>
                    My Ads
                  </Link>
                </li>
                <li className='header__li'>
                  <button className='header__logout' onClick={() => logout()}>
                    Logout
                  </button>
                </li>
                <li className='header__li'>
                  <Link to={'/sell'} className='header__sellButton header__a--white'>
                    Sell in Ustore
                  </Link>
                </li>
              </>
            }
            {!isLogged &&
              <>
                <li className='header__li'>
                  <Link className='header__a--white' to={'/login'}>
                    Login
                  </Link>
                </li>
                <li className='header__li'>
                  <Link className='header__a--white' to={'/sign-up'}>
                    Sign Up
                  </Link>
                </li>
                <li className='header__li'>
                  <Link to={'/login'} className='header__sellButton header__a--white'>
                    Sell in Ustore
                  </Link>
                </li>
              </>
            }
          </ul>
        </nav>
      </C.Container>
    </C.Header>
   );
}

export default Header;