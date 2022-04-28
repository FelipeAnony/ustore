import { useEffect, useState } from 'react';
import DropDownMenu from '../../components/DropDownMenu';
import ItenCard from '../../components/ItenCard';
import Loading from '../../components/loading';
import Searchbar from '../../components/Searchbar';
import { getData } from '../../helpers/API';
import * as C from './styles';

type PostsData = {
  id: string;
  date: string;
  title: string;
  price: string;
  condition: string;
  description: string;
}[];

function Home() {
  const [postsData, setpostsData] = useState<PostsData>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getData();
      setpostsData(data);
    }

    loadData();
  },[])

  return (
    <>
    {!(postsData.length > 0) ? <Loading/> : 
    <C.Container>
      <C.UpMenuContainer className="upContainer">
        <Searchbar />
        <DropDownMenu/>
      </C.UpMenuContainer>
      <C.MainMenuContainer className="mainContainer"> 
        {postsData.map((e, id) => (
          <ItenCard 
            title={e.title}
            price={e.price}
            itemCondition={e.condition}
            date={e.date}
            key={id}
          />
        ))}
      </C.MainMenuContainer>
    </C.Container>
    }
    </>
  );
}

export default Home;