import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import ItenCard from "./index";

const renderEl = () => {
  render(
    <MemoryRouter>
      <ItenCard 
        date='01/01/1970'
        imageLink='https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png'
        itemCondition='new'
        itenId='000'
        price='999'
        title='Incredible Iten'
      />
    </MemoryRouter>
  );
}

describe('ItenCard component', () => {
  it('Should render', () => {
    renderEl();
  });

});