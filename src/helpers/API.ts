const  baseURL = 'http://localhost:5050/';


export const getData = async (endpoint = 'posts?') => {
  const res = await fetch(`${baseURL}${endpoint}`);
  const json = await res.json(); 

  if(!res.ok) console.log(res);
  return json;
}

export const postData = async (endpoint: string, data: any) => {
  const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(`${baseURL}${endpoint}`, options)
  return res;
}

export const updateData = async (endpoint:string, data:any) => {
  const options = {
    method:'PUT',
    headers: {
      'Content-Type':'application/json',
    },
    body: JSON.stringify(data)
  }

  const res = await fetch(`${baseURL}${endpoint}`, options);

  if(!res.ok) console.log(res);
}

export const deleteData = async (endpoint:string) => {
  const options = {
    method:'DELETE',
    headers: {
      'Content-Type':'application/json',
    },
    body: ''
  }

  const res = await fetch(`${baseURL}${endpoint}`, options);
  if(!res.ok) {
    console.log(res)
  }
}

