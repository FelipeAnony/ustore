import { useEffect, useState } from 'react';
import DropDownMenu from '../../components/DropDownMenu';
import ItenCard from '../../components/ItenCard';
import Loading from '../../components/loading';
import NoItensFound from '../../components/NoItensFound';
import Searchbar from '../../components/Searchbar';
import { getData } from '../../helpers/API';
import { useFiltersReducer } from '../../reducers/filtersReducer';
import * as C from './styles';

type Itens = {
  id: string;
  date: string;
  title: string;
  price: string;
  condition: string;
  categories: string;
  description: string;
}[];

function Home() {
  const [itens, setItens] = useState<Itens>([]);
  const [tmpData, setTmpData] = useState<Itens>([]);
  const [itensDirection, setItensDirection] = useState(false);
  const [wasFiltered, setWasFiltered] = useState(false);
  const [filters, filtersDispatch] = useFiltersReducer();


  useEffect(() => {
    const loadData = async () => {
      const data = await getData();
      setItens(data);
    }
    loadData();
  },[])

  useEffect(()=> {
    const loadData = async () => {
      const data = await getData();
      setTmpData(data);
    }

    loadData();

    const filterData = () => {

      setItens(
        tmpData.filter((e) => (
          (filters.searchParams === '' ? true : e.title.includes(filters.searchParams) || e.description.includes(filters.searchParams)) &&
          (filters.categories === 'All' ? true : e.categories === filters.categories) &&
          Number(e.price) >= (filters.price.from === 'default' ? 0 : Number(filters.price.from)) &&
          Number(e.price) <= (filters.price.to === 'default' ? 999999 : Number(filters.price.to)) &&
          (filters.condition === 'default' ? true : e.condition === filters.condition)
        ))
      )

      if(filters.date !== 'default') {
        if(filters.date === 'oldest') setItensDirection(false);
        else setItensDirection(true);
      }

    }

    if(
        filters.searchParams !== '' ||
        filters.categories !== 'All' ||
        filters.price.from !== 'default' ||
        filters.price.to !== 'default' || 
        filters.condition !== 'default' || 
        filters.date !== 'default'
      ) setWasFiltered(true);
    

    filterData();

  } ,[filters])

  return (
    <>
    {(itens.length < 1 && !wasFiltered) ? <Loading/> : 
    <C.Container>
      <C.UpMenuContainer className="upContainer">
        <Searchbar dispatch={filtersDispatch}/>
        <DropDownMenu filtersDispatch={filtersDispatch}/>
      </C.UpMenuContainer>
      <C.MainMenuContainer itensDirection={itensDirection} className="mainContainer"> 
        {itens.length > 0 && itens.map((e, id) => (
          <ItenCard 
            title={e.title}
            price={e.price}
            itemCondition={e.condition}
            date={e.date}
            key={id}
          />
        ))}
        {itens.length < 1 && <NoItensFound/>}
      </C.MainMenuContainer>
    </C.Container>
    }
    </>
  );
}

export default Home;