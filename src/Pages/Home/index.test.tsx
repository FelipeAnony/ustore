import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Home from "./index";

const renderEl = () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
}

describe('Home component', () => {
  it('Should render', () => {
    renderEl();
  });

});