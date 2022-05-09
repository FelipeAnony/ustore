import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import * as C from './styles';

import Filter from '../Filters';
import Categories from '../Categories';

function DropDownMenu() {
  const [filtersIsVisible, setFiltersIsVisible] = useState(false);
  const [categoriesIsVisible, setCategoriesIsVisible] = useState(false);
  const [isOpen, setIsOpen ] = useState(false);

  useEffect(() => {
    if(filtersIsVisible || categoriesIsVisible) setIsOpen(true);
    else setIsOpen(false);

  } ,[filtersIsVisible, categoriesIsVisible])

  const setFilterVisibility = () => {
    if(categoriesIsVisible) {
      setCategoriesIsVisible(false);
      setFiltersIsVisible(true);

    } else setFiltersIsVisible(!filtersIsVisible);
  };

  const setCategoriesVisibility = () => {
    if(filtersIsVisible) {
      setFiltersIsVisible(false);
      setCategoriesIsVisible(true); 

    } else setCategoriesIsVisible(!categoriesIsVisible);
  };

  return (
    <C.Container open={isOpen} >
      <div className='titleContainer'>
        <div 
          className='filters' 
          onClick={() => setFilterVisibility()}
        >
          Filters 
          <IoIosArrowDown 
            className={filtersIsVisible ? 'icon' : ''}
          />
        </div>
        <div 
          className='categories' 
          onClick={() => setCategoriesVisibility()}
        >
          Categories
          <IoIosArrowDown 
            className={categoriesIsVisible ? 'icon' : ''}
          />
        </div>
      </div>
      <div className='childrenContainer'>
         {filtersIsVisible && 
          <div className='filtersContainer'>
            <Filter 
              title='Price'
              options={[
                {value:'0', optionTitle:'0$'},
                {value:'100', optionTitle:'100$'},
                {value:'200', optionTitle:'200$'},
                {value:'300', optionTitle:'300$'},
                {value:'400', optionTitle:'400$'},
                {value:'500', optionTitle:'500$'},
                {value:'600', optionTitle:'600$'},
                {value:'700', optionTitle:'700$'},
                {value:'800', optionTitle:'800$'},
                {value:'800', optionTitle:'900$'},
              ]}
              optionsB={[
                {value:'100', optionTitle:'100$'},
                {value:'200', optionTitle:'200$'},
                {value:'300', optionTitle:'300$'},
                {value:'400', optionTitle:'400$'},
                {value:'500', optionTitle:'500$'},
                {value:'600', optionTitle:'600$'},
                {value:'700', optionTitle:'700$'},
                {value:'800', optionTitle:'800$'},
                {value:'900', optionTitle:'900$'},
                {value:'1000', optionTitle:'1000$'},
                {value:'1001', optionTitle:'>1000$'}
              ]}
              changeString='CHANGE_PRICE_FILTER'
            />
            <Filter 
              title='Condition'
              options={[
                {value: 'new', optionTitle:'new'},
                {value: 'used', optionTitle:'used'}
              ]}
              changeString='CHANGE_CONDITION_FILTER'
            />
            <Filter 
              title='Date'
              options={[
                {value: 'latest', optionTitle: 'Latest'},
                {value: 'oldest', optionTitle: 'Oldest'},
              ]}
              changeString='CHANGE_DATE_FILTER'
            />
          </div>
         }
         {categoriesIsVisible && 
          <div className='categoriesContainer'>
            <Categories 
              title='All'
              changeString='CHANGE_CATEGORIES_FILTER'
            />
            <Categories 
              title='CellPhones'
              changeString='CHANGE_CATEGORIES_FILTER'
            />
            <Categories 
              title='Clothes'
              changeString='CHANGE_CATEGORIES_FILTER'
            />
            <Categories 
              title='Vehicles'
              changeString='CHANGE_CATEGORIES_FILTER'
            />
            <Categories 
              title='House'
              changeString='CHANGE_CATEGORIES_FILTER'
            />
            <Categories 
              title='Utilities'
              changeString='CHANGE_CATEGORIES_FILTER'
            />
            <Categories 
              title="Kid's"
              changeString='CHANGE_CATEGORIES_FILTER'
            />
            <Categories 
              title='Garden'
              changeString='CHANGE_CATEGORIES_FILTER'
            />
            <Categories 
              title='Sports'
              changeString='CHANGE_CATEGORIES_FILTER'
            />
            <Categories 
              title='Electronics'
              changeString='CHANGE_CATEGORIES_FILTER'
            />
            <Categories 
              title='Services'
              changeString='CHANGE_CATEGORIES_FILTER'
            />
          </div>
        }
       </div>
    </C.Container>
  );
}

export default DropDownMenu;