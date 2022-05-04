import { useContext, useEffect, useState } from 'react';
import DropDownMenu from '../../components/DropDownMenu';
import ItenCard from '../../components/ItenCard';
import Loading from '../../components/loading';
import NoItensFound from '../../components/NoItensFound';
import PageNavigation from '../../components/PageNavigation';
import Searchbar from '../../components/Searchbar';
import { filtersContext } from '../../contexts/filtersContext';
import { getData } from '../../helpers/API';
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

type PageNavigationToRenderType = JSX.Element[];

function Home() {
  const [allItens, setAllItens] = useState<Itens>([]);
  const [itens, setItens] = useState<Itens>([]);
  const [showedItens, setShowedItens] = useState<Itens>([]);
  const [wasFiltered, setWasFiltered] = useState(false);
  const [itensDirection, setItensDirection] = useState(false);
  const {filters, filtersDispatch} = useContext(filtersContext);
  const [amountOfPages, setAmountOfPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => { 
    const loadData = async () => {
      const data = await getData();
      setAllItens(data);
      setItens(data);
    }

    loadData();

    const timer = setTimeout(() => {
      if(itens.length === 0) setWasFiltered(true);
    } ,5000)

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      let endpoint = `posts?categories=${filters.categories}`;
  
      if(filters.categories !== 'All') {
        const data = await getData(endpoint);
        setWasFiltered(true);
        setAllItens(data);
        setItens(data);
      } else {
        const data = await getData();
        setAllItens(data);
        setItens(data);
      }
    }

    loadData();
  
  }, [filters.categories])

  useEffect(()=> {
    setItens(allItens.filter((e)=> (
      (filters.searchParams !== '' ? e.title.includes(filters.searchParams) || e.description.includes(filters.searchParams): true) &&
      (filters.condition !== 'default' ? e.condition === filters.condition : true) &&
      (filters.price.from !== 'default' ? Number(e.price) >= Number(filters.price.from) : true) &&
      (filters.price.to !== 'default' ? Number(e.price) <= Number(filters.price.to): true)
    )))

    if(
      filters.price.from !== 'default' ||
      filters.price.to !== 'default' ||
      filters.condition !== 'default' ||
      filters.date !== 'default' ||
      filters.searchParams !== ''
    ) setWasFiltered(true);

    filters.date === 'oldest' ? setItensDirection(false) : setItensDirection(true);

  }, [filters.price, filters.condition, filters.date, filters.searchParams])

  useEffect(() => {
    setAmountOfPages(Math.ceil(itens.length / 10));
  }, [itens])

  useEffect(() => {
    const x = pageNumber * 10 - 10;
    const y = pageNumber * 10 - 1;
    setShowedItens(itens.filter((e, i) => i >= x  && i <= y));

  }, [itens, pageNumber]);

  return (
    <>
    {(itens.length < 1 && !wasFiltered) ? <Loading/> : 
    <C.Container>
      <C.UpMenuContainer className="upContainer">
        <Searchbar/>
        <DropDownMenu/>
      </C.UpMenuContainer>
      <C.MainMenuContainer itensDirection={itensDirection} className="mainContainer"> 
        {showedItens.length > 0 && showedItens.map((e, id) => (
          <ItenCard 
            title={e.title}
            price={e.price}
            itemCondition={e.condition}
            date={e.date}
            key={id}
          />
        ))}
        {(itens.length < 1 && wasFiltered)  && <NoItensFound/>}
      </C.MainMenuContainer>
      <C.PagesContainer>
        <PageNavigation 
          amountOfPages={amountOfPages}
          mainPageNumber={pageNumber} 
          setMainPageNumber={setPageNumber}  
        />
      </C.PagesContainer>
    </C.Container>
    }
    </>
  );
}

export default Home;