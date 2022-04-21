import Footer from "../Footer";
import Header from "../Header";

type Props = {
  children: JSX.Element;
}

const Template = ({children}: Props) => {
  return ( 
    <>
      <Header/>
      {children}
      <Footer />
    </>
   );
}

export default Template;