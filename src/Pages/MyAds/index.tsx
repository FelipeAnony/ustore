import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Cookies from "js-cookie";

import { Noads } from './styles';

import { BackgroundCard } from '../../components/MainComponents';
import EditableItens from '../../components/EditableIten';

import { getData } from '../../helpers/API';

type Data = {
  id: string;
  author: string;
  sellerInfo: {
    name: string;
    email: string;
    phone: string; 
  };
  title: string;
  price: string;
  description: string;
  photos: {src: string}[]

}[] | null;

function MyAds() {
  const isLogged = Cookies.get('token');
  const [data, setData] = useState<Data>(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await getData(`posts?author=${isLogged}`);
      setData(data);
    }
    loadData()

  }, [])

  return (
    <>
      {!isLogged && <Navigate to={'/login'}/>}
      
      <BackgroundCard>
        <h1 className='title'>My Ads</h1>
        {data && data.length < 1 && 
          <Noads>
            you don't have any ads yet!
            <Link className='makeAnAd' to={'/sell'}>make an Ad</Link>
          </Noads>
        }
        {data && data.map((e, i) => (
          <EditableItens
            id={e.id}
            mainPhoto={e.photos[0].src}
            title={e.title}
            description={e.description}
            price={e.price}
            key={i}
          />
        ))}
      </BackgroundCard>
    
    </> 
   );
}

export default MyAds;