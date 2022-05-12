import { render } from '@testing-library/react';

import PageNavigation from "./index";

const renderEl = () => {
  render(
    <PageNavigation 
      amountOfPages={1}
      mainPageNumber={1}
      setMainPageNumber={() => null}
    />
  );
}

describe('PageNavigation component', () => {
  it('Should render', () => {
    renderEl();
  });

});