import { useContext } from 'react';

import * as C from './styles';

import { filtersContext } from '../../contexts/filtersContext';

type Props = {
  title: string;
  options: {value: string, optionTitle: string}[];
  optionsB?: {value: string, optionTitle: string}[];
  changeString: string;
}

function Filter({title, options, optionsB, changeString} : Props) {
  const {filters, filtersDispatch} = useContext(filtersContext);

  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    if(optionsB) {
      filtersDispatch({type: changeString, payload: {price: {from: e.target.value, to: filters.price.to}}})

    } else {
      filtersDispatch({type: changeString, payload: {[title.toLocaleLowerCase()]: e.target.value}});
    }
  }

  const handleChangeTwo = (e:React.ChangeEvent<HTMLSelectElement>) => {
    filtersDispatch({type: changeString, payload: {price: {from: filters.price.from, to: e.target.value}}})
  }

  let value1;

  switch(title) {
    case 'Price' : 
      value1 = filters.price.from;
      break;
    case 'Condition' : 
      value1 = filters.condition;
      break;
    case 'Date' : 
      value1 = filters.date;
      break;
  }

  return (
    <C.Container>
      {title}
        <>
        <div className="selectContainer">
          <select 
            className='selectContainer__select'
            value={value1}
            onChange={(e) => handleChange(e)}
          >
            <option value='default'>
              {optionsB ? 'from' : 'Select'}
            </option>

            {options.map((e, id)=> (
              <option key={id} value={e.value}>{e.optionTitle}</option>
            ))}
            
          </select>

          {optionsB &&
            <select 
              className='selectContainer__select'
              value={filters.price.to} 
              onChange={(e) => handleChangeTwo(e)}
            >
              <option value='default'>To</option>

              {optionsB.map((e, id)=> (
                <option key={id} value={e.value}>{e.optionTitle}</option>
              ))}

            </select>
          }
        </div>
        </>
    </C.Container>
  );
}

export default Filter;