import { useContext, useEffect, useState } from 'react';

import * as C from './styles';

import { filtersContext } from '../../contexts/filtersContext';

type Props = {
  title: string;
  changeString: string;
}

function Categories({title, changeString}: Props) {
  const [selected, setSelected] = useState(false);
  const {filters, filtersDispatch} = useContext(filtersContext);

  useEffect(()=> {
    if(filters.categories === title) setSelected(true);
    else setSelected(false);

  } ,[title, filters.categories])

  return ( 
    <C.Categories 
      isSelected={selected} 
      onClick={() => filtersDispatch({type: changeString, payload:{categories: title}})}
    >
      {title}
    </C.Categories>
   );
}

export default Categories;