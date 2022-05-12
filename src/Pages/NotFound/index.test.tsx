import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '.';



const renderEl = () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );
}

describe('NotFound component', () => {
  it('Should render', () => {
    renderEl();
  });

});