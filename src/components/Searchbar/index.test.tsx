import { render } from '@testing-library/react';

import Searchbar from "./index";

const renderEl = () => {
  render(
    <Searchbar />
  );
}

describe('Searchbar component', () => {
  it('Should render', () => {
    renderEl();
  });

});