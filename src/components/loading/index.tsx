import * as C from './styles';

import loading from '../../images/loading.gif';

function Loading() {
  return ( 
    <C.Container>
      <div className='loading__logo'>
        Ustore
      </div>
      <img className='loading__animation' src={loading} alt='loading animation' />
    </C.Container>
   );
}

export default Loading;