import Footer from "../Footer";
import Header from "../Header";
import { Main } from "../MainComponents";

type Props = {
  children: JSX.Element;
}

const Template = ({children}: Props) => {
  return ( 
    <>
      <Header/>
      <Main>
        {children}
      </Main>
      <Footer />
    </>
   );
}

export default Template;