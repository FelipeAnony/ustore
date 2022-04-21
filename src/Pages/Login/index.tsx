import { Main } from '../../components/MainComponents';
import * as C from './styles';

function Login() {
  return ( 
    <Main>
      <C.Container>
        <form>
          <label className='area'>
            <div className='area--title'>
              E-mail
            </div>
            <div className='area--input'>
              <input type="email" />
            </div>
          </label>
          <label className='area'>
            <div className='area--title'>
              Password
            </div>
            <div className='area--input'>
              <input type="password" />
            </div>
          </label>
          <label className='area'>
            <div className='area--checkbox'>
              Remind my password
              <input type="checkbox" />
            </div>
          </label>
          <div className='area--button'>
            <button>Login</button>
          </div>

        </form>
      </C.Container>
    </Main>
   );
}

export default Login;