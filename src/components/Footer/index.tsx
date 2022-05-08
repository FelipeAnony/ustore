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
            <Link to={'/'}>Home</Link>
            |
            <Link to={'/sell'}>Sell with us</Link>
            |
            <Link to={'/terms'}>Terms and conditions</Link>
            |
            <Link to={'/privacy'}>privacy policy</Link>
        </div>
        <div className='rights'>
          All rights reserved.
        </div>
      </div>
    </C.Container>
  );
}

export default Footer;