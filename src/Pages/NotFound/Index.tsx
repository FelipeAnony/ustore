import { Link } from "react-router-dom";

import * as C from './Styles';

import { BackgroundCard } from "../../components/MainComponents";

function NotFound() {
  return ( 
    <BackgroundCard>
      <C.Container>
        <p className="title">ERROR</p>
        <p className="number">404</p>
        <p className="message">Page Not Found!</p>
        <Link to={'/'} className='backButton'>Back to home</Link>
      </C.Container>
    </BackgroundCard>
  );
}

export default NotFound;