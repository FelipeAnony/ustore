import { render, screen } from '@testing-library/react';

import Categories from "./index";

const renderEl = () => {
  render(
    <Categories 
      title='test title'
      changeString='value'
    />
  );
}

describe('Categories component', () => {
  it('Should render', () => {
    renderEl();
  });

  it('Should have a title', ()=> {
    renderEl();
    const element = screen.getByText('test title');
    expect(element).toBeInTheDocument();
  })

})