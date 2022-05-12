import * as C from './styles';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useEffect, useState } from 'react';

type Props = {
  imageSrc: { 
    src:string;
  }[];
}

function PhotoGallery({ imageSrc } : Props) {
  const [marginValue, setMarginValue] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [widthValue, setWidthValue] = useState(window.innerWidth);

  useEffect(() => {
    setWidthValue(window.innerWidth);

    if(pageNumber > imageSrc.length){
      setPageNumber(1);
      setMarginValue(0);
    } 

  }, [pageNumber])

  useEffect(() => {
    setMarginValue(() => (
      (pageNumber - 1) * (widthValue > 500 ? -450 : - 400)
    ))
  }, 
  
  [widthValue])
  

  const marginAddValue = () => {
    if (window.innerWidth <= 500){
      return 400
    } else return 450;
  }

  const handleClickLeft = () => {
    if(marginValue < 0) {
      setMarginValue(marginValue + marginAddValue());
      setPageNumber(pageNumber - 1);
    }
  }

  const handleClickRight = () => {
    if(window.innerWidth > 500 && marginValue !== -450 * (imageSrc.length - 1)) {
      setMarginValue(marginValue - marginAddValue())
      setPageNumber(pageNumber + 1);
    }
    if (window.innerWidth <= 500 && marginValue !== -400 * (imageSrc.length - 1)){
      setMarginValue(marginValue - marginAddValue())
      setPageNumber(pageNumber + 1);
    }
  }

  return ( 
    <C.Container marginValue={marginValue}>
      <div 
        className='photoGallery__arrow left'
        onClick={handleClickLeft}
      >
        <MdKeyboardArrowLeft/>
      </div>
      <div className='photoGallery__pageCounter'>
        <span>
          {pageNumber}/{imageSrc.length}
        </span>
      </div>
      <div className='photoGallery__row'>
        {imageSrc.map((e, i) =>(
          <div 
            className='photoGallery__imageContainer'
            key={i}
          >
            <img className='photoGallery__img' src={e.src} alt=''/>
          </div>
        ))}
      </div>
      <div 
        className='photoGallery__arrow right'
        onClick={handleClickRight}
      >
        <MdKeyboardArrowRight/>
      </div>
    </C.Container>
   );
}

export default PhotoGallery;