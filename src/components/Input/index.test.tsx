import { render, screen } from '@testing-library/react';

import Input from './index';

const renderEl = () => {
  render(
    <Input 
      error='some error'
      title='my input'
      type='text'
      state='value'
      setState={() => null}
    />
  );
}

describe('Input component', () => {
  it('Should render', () => {
    renderEl();
  });

  it('Should have a Title', () => {
    renderEl();
    const element = screen.getByText('my input');
    expect(element).toBeInTheDocument();
  });

  it('Should have an input field', () => {
    renderEl();
    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();
  });

  it('Should have an Error message', () => {
    renderEl();
    const element = screen.getByText('some error');
    expect(element).toBeInTheDocument();
  });
  
});
