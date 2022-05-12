import Login from './index';
import { render, screen } from '@testing-library/react';

describe('Login screen', () => {

  it('Should render', () => {
    render(<Login/>);

  })

  it('Should have a "Email" input', () =>{
    render(<Login />);
    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).toBeInTheDocument();
  });

  it('Should have a "Password" input', () =>{
    render(<Login />);
    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();
  });

  it('Should have a "Login" button', () =>{
    render(<Login />);
    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeInTheDocument();
  });

});
