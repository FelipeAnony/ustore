import { render } from '@testing-library/react';

import DropDownMenu from "./index";

const renderEl = () => {
  render(
    <DropDownMenu />
  );
}

describe('DropDownMenu component', () => {
  it('Should render', () => {
    renderEl();
  });

});