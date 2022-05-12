import SignUp from './index';
import { render, screen } from '@testing-library/react';

const renderEl = () => render(<SignUp/>);

describe('Login screen', () => {
  it('Should render', () => {
    renderEl();

  })

  it('Should have a "Name" input', () =>{
    renderEl();
    const element = screen.getByLabelText('Name');
    expect(element).toBeInTheDocument();
  });

  it('Should have a "Email" input', () =>{
    renderEl();
    const element = screen.getByLabelText('Email');
    expect(element).toBeInTheDocument();
  });

  it('Should have a "Phone" input', () =>{
    renderEl();
    const element = screen.getByLabelText('Phone');
    expect(element).toBeInTheDocument();
  });

  it('Should have a "Password" input', () =>{
    renderEl();
    const element = screen.getByLabelText('Password');
    expect(element).toBeInTheDocument();
  });

  it('Should have a "Confirm Password" input', () =>{
    renderEl();
    const element = screen.getByLabelText('Confirm your Password');
    expect(element).toBeInTheDocument();
  });

  it('Should have a terms of use acceptance', () =>{
    renderEl();
    const element = screen.getByText('I accept the');
    expect(element).toBeInTheDocument();
  });

  it('Should have a "Sign Up Now" button', () =>{
    renderEl();
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });

});