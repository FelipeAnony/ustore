import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ItenPage from "./index";

const renderEl = () => {
  render(
    <MemoryRouter>
      <ItenPage />
    </MemoryRouter>
  );
}

describe('ItenPage component', () => {
  it('Should render', () => {
    renderEl();
  });

});