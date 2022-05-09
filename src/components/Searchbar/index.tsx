import * as C from './style';
import { BiSearch } from 'react-icons/bi';
import { useState, useContext } from 'react';
import { filtersContext } from '../../contexts/filtersContext';


function Searchbar() {
  const [searchInput, setSearchInput] = useState('');
  const {filters, filtersDispatch} = useContext(filtersContext);

  const search = () => {
    filtersDispatch({type: 'CHANGE_SEARCH_PARAMS', payload:{searchParams: searchInput}});
  }

  return ( 
    <C.Container>
      <input 
        className='searchBar__input'
        onChange={(e) => setSearchInput(e.target.value)} 
        placeholder='Search...' 
        type='text' 
      />
      <div onClick={search} className='searchBar__iconContainer'>
        <BiSearch />
      </div>
    </C.Container>
   );
}

export default Searchbar;