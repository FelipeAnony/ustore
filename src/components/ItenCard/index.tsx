import * as C from './styles';
import { useNavigate } from 'react-router-dom';

type Props = {
  title: string;
  imageLink: string;
  itenId: string;
  price: string;
  itemCondition: string;
  date: string;
}

function ItenCard({title, imageLink, itenId, price, itemCondition, date}: Props) {
  const navigate = useNavigate();

  return ( 
    <C.Container onClick={() => navigate(`/iten/${itenId}`)}>
      <C.InnerContainer>
        <div className='itenCard__imageContainer'>
          <img className='itenCard__img' src={imageLink} alt=''/>
        </div>
        <div className='itenCard__dataContainer' >
          <div>
            <p className='itenCard__title'>{title}</p>
            <p className='itenCard__price'>{`${price} $`}</p>
            <p className='itenCard__condition'>{itemCondition}</p>
          </div>
          <p className='itenCard__date'>{date}</p>
        </div>
      </C.InnerContainer>
    </C.Container>
   );
}

export default ItenCard;