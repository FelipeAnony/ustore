import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import * as C from './styles';

type Props = {
  amountOfPages: number;
  mainPageNumber: number;
  setMainPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

function PageNavigation({mainPageNumber, amountOfPages, setMainPageNumber}: Props) {

  const previousPage = () => mainPageNumber > 1 && setMainPageNumber(mainPageNumber - 1);
  const nextPage = () => mainPageNumber < amountOfPages && setMainPageNumber(mainPageNumber + 1);

  return ( 
    <C.Container> 
      <MdKeyboardArrowLeft 
        className='pageNavigation__arrowIcon'
        onClick={previousPage}
      />

      {mainPageNumber > 1 && 
        <div 
          className='pageNavigation__page'
          onClick={previousPage}
        >
          <p>{mainPageNumber - 1}</p>
        </div>
      }

      <div 
        className='pageNavigation__page pageNavigation__page--selected '
      >
        <p>{mainPageNumber}</p>
      </div>

      { amountOfPages > 1 && mainPageNumber < amountOfPages &&
        <div 
          className='pageNavigation__page'
          onClick={nextPage}
        >
          <p>{mainPageNumber + 1}</p>
        </div>
      }
      <MdKeyboardArrowRight 
        className='pageNavigation__arrowIcon'
        onClick={nextPage}
      />
    </C.Container>
  );
}

export default PageNavigation; 