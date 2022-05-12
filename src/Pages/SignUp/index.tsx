import { useState } from "react";
import * as C from './styles'

import { BackgroundCard, ErrorMessage} from "../../components/MainComponents";
import Input from "../../components/Input";

import { DoSignUp } from "../../backend/backendAuth";

type ErrorState = {
  name: string;
  phone: string;
  email: string;
  password: string;
  acceptance: boolean;
}

const initialErrorState = {
  name: '',
  phone: '',
  email: '',
  password: '',
  acceptance: false
}

function SignUp() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [acceptance, setAcceptance] = useState(false);
  const [error, setError] = useState<ErrorState>(initialErrorState);
  const [formIsOk, setFormIsOk] = useState(false);

  const validateForm = () =>{
    let errors:ErrorState = {
      name: '',
      email: '',
      phone: '',
      password: '',
      acceptance: false
    }

    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
    regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    
    if(!name.trim()) {
      errors.name = 'the phone field cannot be empty.'
    }
    else if (!regexName.test(name.trim())){
      errors.name = "The field name only accepts letters and spaces."
    } 
    if(!email.trim()) {
      errors.email = 'the email field cannot be empty.'
    }
    else if (!regexEmail.test(email.trim())){
      errors.email = "Invalid Email."
    }
    if(!password.trim()) {
      errors.password = 'the password field cannot be empty.'
    }
    if(!phone.trim()) {
      errors.phone = 'the phone field cannot be empty.'
    }

    if(password !== passwordConfirmation) {
      errors.password = 'passwords do not match.';
    } 

    if(!acceptance) {
      errors.acceptance = true;
    } 
    
    setError(errors);

    if(errors.name || errors.acceptance || errors.email || errors.password || errors.phone) {
      setFormIsOk(false);
    } else setFormIsOk(true);
  }

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();  
    validateForm();
    let form;
    if(formIsOk) {
       form = {
        name,
        phone,
        email,
        password,
      }

      const emailAlreadyOnUse = await DoSignUp(form);
      if(emailAlreadyOnUse) {
        setError({...error, email: emailAlreadyOnUse});
      }
    } else return;
    
  }


  return ( 
    <BackgroundCard>
      <h1 className='title'>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          title="Name" 
          type="text" 
          state={name}
          setState={setName}
          error={error.name} 
        />
        <Input 
          title="Email" 
          type="Email" 
          state={email}
          setState={setEmail}
          error={error.email} 
        />
        <Input 
          title="Phone" 
          type="text" 
          state={phone}
          setState={setPhone}
          error={error.phone} 
          maxLength = {16}
        />
        <Input 
          title="Password" 
          type="Password" 
          state={password}
          setState={setPassword}
          error={error.password}
          maxLength = {16} 
        />
        <Input 
          title="Confirm your Password" 
          type="Password" 
          state={passwordConfirmation}
          setState={setPasswordConfirmation}
          error={error.password}
          maxLength = {16} 
        />
        <C.acceptInputContainer>
          <label>
            <div>I accept the</div> <a href='/terms' target='_blank'>terms of use</a> and conditions.
            <input 
              type='checkbox' 
              checked={acceptance} 
              onChange={() => setAcceptance(!acceptance)}
            />
          </label>
          {error.acceptance && 
            <ErrorMessage>
              you need to accept the terms and conditions to register.
            </ErrorMessage>
          }
        </C.acceptInputContainer>
        <C.Button>Sign Up Now</C.Button>
      </form>
    </BackgroundCard>

   );
}

export default SignUp;