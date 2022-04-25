import { FormEvent, useState} from 'react';
import { login } from '../../backend/backendAuth';
import * as C from './styles';
import Cookies from 'js-cookie';
import Input from '../../components/Input';
import { BackgroundCard } from '../../components/MainComponents';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLogged, setKeepLogged] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = await login(email, password);

    if(data.token) {
      if(keepLogged) Cookies.set('token', data.token, {expires: 365});
      else Cookies.set('token', data.token);

      window.location.href = '/';

    } else {
      if(typeof data.error === 'string') {
        setError(data.error); 
      }
    }
  }
  
  return ( 
      <BackgroundCard>
        <h1 className='title'>Login</h1>
        <form onSubmit={handleSubmit}>
          <Input 
            error={error}
            title='Email'
            state={email}
            setState={setEmail}
            type={email}
            maxLength={32}
          />
          <Input 
            error={error}
            title='Password'
            state={password}
            setState={setPassword}
            type='password'
            maxLength={16}
          />
          <C.keppLoggedContainer>
            <label>
              keep my session
              <input 
                type='checkbox' 
                checked={keepLogged} 
                onChange={() => setKeepLogged(!keepLogged)}
              />
            </label>
          </C.keppLoggedContainer>
          <C.Button>Login</C.Button>
        </form>
      </BackgroundCard>
   );
}

export default Login;