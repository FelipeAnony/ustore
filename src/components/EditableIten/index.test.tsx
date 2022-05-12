import { render } from '@testing-library/react';

import EditableItens from "./index";

const renderEl = () => {
  render(
    <EditableItens 
      description='iten description'
      id='000'
      mainPhoto='https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png'
      price='999'
      title='Iten title'
    />
  );
}

describe('EditableItens component', () => {
  it('Should render', () => {
    renderEl();
  });

});