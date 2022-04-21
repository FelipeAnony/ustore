import * as C from './styles';
import { Link } from 'react-router-dom';
import { isLogged } from '../../helpers/AuthHandler';

function Header() {

  let logged = isLogged();

  return ( 
    <C.Header>
      <C.Container>
        <Link to={'/'} className='logo'>
          Ustore
        </Link>
        <nav>
          <ul>
            {logged && 
              <>
                <li>
                  <Link to={'/my-account'}>
                    My Account
                  </Link>
                </li>
                <li>
                  <Link to={'/logout'}>
                    Logout
                  </Link>
                </li>
              </>
            }
            {!logged &&
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