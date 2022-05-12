import { render } from '@testing-library/react';

import Loading from "./index";

const renderEl = () => {
  render(
    <Loading />
  );
}

describe('Loading component', () => {
  it('Should render', () => {
    renderEl();
  });

});