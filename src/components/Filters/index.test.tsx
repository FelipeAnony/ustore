import { render } from '@testing-library/react';

import Filters from "./index";

const renderEl = () => {
  render(
    <Filters 
      changeString=''
      title='filters'
      options={[{value: 'value', optionTitle: ''}]}
    />
  );
}

describe('Filters component', () => {
  it('Should render', () => {
    renderEl();
  });

});