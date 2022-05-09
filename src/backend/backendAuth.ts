type FormType = {
  name: string;
  phone: string;
  email: string;
  password: string
}

const customGetFetch = async (endpoint:string) => {
 const res = await fetch(`http://localhost:5050/${endpoint}`)
 const json = await res.json();
 return json;
}

const customPostFetch = async (endpoint: string, data: any) => {
  const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(endpoint, options)

}

export const login = async (email:string, password:string) => {
  const tmpDB = await customGetFetch('auth');
  const tmpFilter = tmpDB.filter((e: any) => e.email === email && e.password === password);
  
  if(tmpFilter.length > 1) return {error: 'An error occured', token: ''};
  if(tmpFilter.length === 1) {
    return {
      error: false,
      token: tmpFilter[0].token
    }
  }
  if(tmpFilter.length < 1) {
    return {
      error: 'Wrong email or password',
      token: ''
    }
  }
    
  return {
    error: 'error',
    token: ''
  }
}

export const DoSignUp = async (form: FormType) => {
  const res = await customGetFetch('auth')
  const id = res.length;

  const emailAlreadyOnUse = await res.filter((e: any) => e.email === form.email);
  console.log(emailAlreadyOnUse);

  if(emailAlreadyOnUse.length > 0) {
    return 'Email already on Use.'
  }

  let data = {
    email: form.email,
    password: form.password,
    token: `${10000 + id}`
  }

  const post1 = await customPostFetch('http://localhost:5050/auth', data)


  let data2 = {
    id: data.token,
    name: form.name,
    phone: form.phone,
    email: form.email 
  }

  const post2 = await customPostFetch('http://localhost:5050/users', data2)
}