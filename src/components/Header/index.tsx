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
        <Link to={'/'} className='logo'>
          Ustore
        </Link>
        <nav>
          <ul>
            {isLogged && 
              <>
                <li>
                  <Link to={'/my-ads'}>
                    My Ads
                  </Link>
                </li>
                <li>
                  <button className='logout' onClick={() => logout()}>
                    Logout
                  </button>
                </li>
                <li>
                  <Link to={'/sell'} className='sellButton'>
                    Sell in Ustore
                  </Link>
                </li>
              </>
            }
            {!isLogged &&
              <>
                <li>
                  <Link to={'/login'}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={'/sign-up'}>
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to={'/login'} className='sellButton'>
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