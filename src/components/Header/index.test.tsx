import Header from './index';
import { render, screen } from '@testing-library/react';
import {MemoryRouter } from 'react-router-dom';

const renderEl = () =>  render(
  <MemoryRouter>
    <Header/>
  </MemoryRouter>
);

describe('Header component', () => {
  it('Should render', () => {
    renderEl();

  })

  it('Should have a "Ustore" Logo', () =>{
    renderEl();
    const element = screen.getByText('Ustore');
    expect(element).toBeInTheDocument();
  });

  it('Should have a "Login" link', () =>{
    renderEl();
    const element = screen.getByText('Login');
    expect(element).toBeInTheDocument();
  });

  it('Should have a "Sign Up" link', () =>{
    renderEl();
    const element = screen.getByText('Sign Up');
    expect(element).toBeInTheDocument();
  });

  it('Should have a "Sell in Ustore" Button', () =>{
    renderEl();
    const element = screen.getByText('Sell in Ustore');
    expect(element).toBeInTheDocument();
  });

});