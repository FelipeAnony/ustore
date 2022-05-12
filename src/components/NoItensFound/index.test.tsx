import { render } from '@testing-library/react';

import NoItensFound from "./index";

const renderEl = () => {
  render(
    <NoItensFound />
  );
}

describe('NoItensFound component', () => {
  it('Should render', () => {
    renderEl();
  });

});