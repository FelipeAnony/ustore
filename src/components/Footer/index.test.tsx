import Footer from './index';

import { screen, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

const renderEl = () => render(
  <MemoryRouter>
    <Footer />
  </MemoryRouter>
);

describe('Footer component', () => {

  it('Should render', () => {
    renderEl();

  })

  it('Should have a "Ustore" logo', () => {
    renderEl();
    const element = screen.getByText('Ustore');
    expect(element).toBeInTheDocument();
  })

  it('Should have a "Home" link', () => {
    renderEl();
    const element = screen.getByText('Home');
    expect(element).toBeInTheDocument();
  })

  it('Should have a "Sell with us" link', () => {
    renderEl();
    const element = screen.getByText('Sell with us');
    expect(element).toBeInTheDocument();
  })

  it('Should have a "Terms and conditions" link', () => {
    renderEl();
    const element = screen.getByText('Terms and conditions');
    expect(element).toBeInTheDocument();
  })

  it('Should have a "privacy policy" link', () => {
    renderEl();
    const element = screen.getByText('privacy policy');
    expect(element).toBeInTheDocument();
  })

  it('Should have a "All rights reserved" message', () => {
    renderEl();
    const element = screen.getByText('All rights reserved.');
    expect(element).toBeInTheDocument();
  })
  
})