import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';

import * as C from './styles';

import Loading from '../../components/loading';
import PhotoGallery from '../../components/PhotoGallery';

import { getData } from '../../helpers/API';

type Iten = {
  id: string;
  author: string;
  sellerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  title: string;
  price: string | number;
  condition: string;
  description: string;
  date: string;
  categories: string;
  photos: {src:string}[];
} | null;

function ItenPage() {
  const { itenId } = useParams();
  const [itenData, setItenData] = useState<Iten>(null);

  const navigate = useNavigate();

  useEffect(()=>{
    const loadData = async () => {
      const data = await getData(`posts/${itenId}`);
      setItenData(data);
    }

    loadData();
  } ,[])

  return ( 
    <>
      {!itenData && <Loading/>}

      {itenData && typeof itenData?.author === 'undefined' && navigate('/notfound')}

      <C.Container>
        <div 
          className='backButtonContainer'
          onClick={() => navigate(-1)}
        >
          <MdKeyboardArrowLeft/> Back
        </div>
        <div className='innerFlexContainer'>
          <div className='imagesContainer'>
            {itenData?.photos && 
              <PhotoGallery 
                imageSrc={itenData?.photos}
              />
            }
          </div>
          <div className='infoContainer'>
            <div className='description'>
              <h1>{itenData?.title}</h1>
              <span className='condition'>{itenData?.condition}</span>
              <span className='price'>{itenData?.price} $</span>
              <span><b>Description:</b></span>
              <p>{itenData?.description}</p>
            </div>
            <div className='sellerContactInfo'>
              <span><b>Seller Info</b></span>
              <div>
                <AiOutlineUser/>
                <span>
                  {itenData?.sellerInfo.name}
                </span>
              </div>
              <div>
                <AiOutlineMail/>
                <span>
                  {itenData?.sellerInfo.email}
                </span>
              </div>
                <div>
                  <AiOutlinePhone/>
                  <span>
                    {itenData?.sellerInfo.phone}
                  </span>
                </div>
            </div>
          </div>
        </div>
      </C.Container>
    </>
   );
}

export default ItenPage;