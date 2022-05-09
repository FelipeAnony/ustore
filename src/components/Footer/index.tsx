import { Link } from 'react-router-dom';

import * as C from './style';

function Footer() {
  return ( 
    <C.Container>
      <div className='innerContainer'>
        <div className='logo'>
          Ustore
        </div>
        <div className='menu'>
            <Link className='menu__a' to={'/'}>Home</Link>
            |
            <Link className='menu__a' to={'/sell'}>Sell with us</Link>
            |
            <Link className='menu__a' to={'/terms'}>Terms and conditions</Link>
            |
            <Link className='menu__a' to={'/privacy'}>privacy policy</Link>
        </div>
        <div className='rights'>
          All rights reserved.
        </div>
      </div>
    </C.Container>
  );
}

export default Footer;