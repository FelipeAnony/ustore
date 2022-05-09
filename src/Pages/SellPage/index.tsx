import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import Cookies from "js-cookie";

import * as C from './styles';

import Input from "../../components/Input";
import { BackgroundCard, ErrorMessage } from "../../components/MainComponents";

import { getData, postData } from "../../helpers/API";

type Error = {
  title: string;
  price: string;
  mainImage: string;
  network: string;
}

const initialErrorValue = {
  title: '',
  price: '',
  mainImage: '',
  network: ''
}

function SellPage() {
  const isLogged = Cookies.get('token');

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [condition, setCondition] = useState('new');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [error, setError] = useState<Error>(initialErrorValue);
  const [sended, setSended] = useState(false);

  useEffect(()=>{
    if(title) setError({...error, title: ''});
    if(price)setError({...error, price: ''});
    if(mainImage)setError({...error, mainImage: ''})

  } ,[error, title, price, mainImage])

  const handleSendForm = async () => {
    if(!title) {
      setError({...error, title: 'The title is required'})
      return;
    }
    if(!price) {
      setError({...error, price: 'The Price is required'})
      return;
    }
    if(!mainImage) {
      setError({...error, mainImage: 'You need to put almost one image'});
      return;
    }

    const tmpData = await getData(`users?id=${Cookies.get('token')}`)
    const sellerInfo = {
      name: tmpData[0].name,
      email: tmpData[0].email,
      phone: tmpData[0].phone
    }

    const data = {
      author: Cookies.get('token'),
      sellerInfo,
      title,
      price,
      condition,
      description,
      date: new Date().toLocaleDateString(),
      categories: category,
      photos: [
        {
          src: mainImage
        }
      ]
    }

    image2 && data.photos.push({src: image2});
    image3 && data.photos.push({src: image3});
    
    const res = await  postData('posts', data);

    if(res.ok){
      setSended(true);
      handleClearForm();

      setTimeout(()=> {
        setSended(false);
      } , 5000)

    } else setError({...error, network: 'a Network error occurred'})
  }

  const handleClearForm = () => {
    setTitle('')
    setPrice('0')
    setCondition('new')
    setCategory('All')
    setDescription('')
    setMainImage('')
    setImage2('')
    setImage3('')
  }

  return ( 
    <BackgroundCard>

      {!isLogged && <Navigate to={'/login'}/>}
      
      <h1 className="title">Sell With Us</h1>
      <C.Container>
        <div className="msgsContainer">
          {sended && <div className="success">successfully published!</div>}
          {error.network !== '' && <ErrorMessage>{error.network}</ErrorMessage>}
          {error.title !== '' && <ErrorMessage>{error.title}</ErrorMessage>}
          {error.price !== '' && <ErrorMessage>{error.price}</ErrorMessage>}
          {error.mainImage !== '' && <ErrorMessage>{error.mainImage}</ErrorMessage>}
        </div>
        <Input 
          title="Ad Title"
          type="text"
          maxLength={50}
          state={title}
          setState={setTitle}
          error={''}
        />
        <label className="priceLabel">
          Price
          <input 
            className="priceInput"
            type="number"
            value={price}
            onChange={(e) => Number(e.target.value) >= 0 && setPrice(e.target.value)}
            maxLength={9}
          />
          $
        </label>
        <select 
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        >
          <option value='new'>New</option>
          <option value='used'>Used</option>
        </select>
        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value='All'>Categories</option>
          <option value='CellPhones'>Cellphones</option>
          <option value='Clothes'>Clothes</option>
          <option value='Vehicles'>Vehicles</option>
          <option value='House'>House</option>
          <option value='Utilities'>Utilities</option>
          <option value="Kid's">Kid's</option>
          <option value='Garden'>Garden</option>
          <option value='Sports'>Sports</option>
          <option value='Electronics'>Electronics</option>
          <option value='Services'>Services</option>
        </select>
        <div className="descriptionContainer">
          Description
          <textarea 
            cols={50}
            rows={10}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={500}
          />
        </div>
        <Input 
          title="Main Image Link"
          type="text"
          maxLength={999}
          state={mainImage}
          setState={setMainImage}
          error=''
        />
        <Input 
          title="Image 2 link (optional)"
          type="text"
          maxLength={999}
          state={image2}
          setState={setImage2}
          error=''
        />
        <Input 
          title="Image 3 link (optional)"
          type="text"
          maxLength={999}
          state={image3}
          setState={setImage3}
          error=''
        />
        <div className="buttonsContainer">
          <button 
            className="sendButton"
            onClick={handleSendForm}
          >
            Publish your add
          </button>
          <button 
            className="clearButton"
            onClick={handleClearForm}
          >
            Clear form
          </button>
        </div>
      </C.Container>
    </BackgroundCard>
   );
}

export default SellPage;