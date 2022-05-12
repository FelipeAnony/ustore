import { render } from '@testing-library/react';

import PhotoGallery from "./index";

const renderEl = () => {
  render(
    <PhotoGallery 
      imageSrc={[
        { src: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png' }
      ]}
    />
  );
}

describe('PhotoGallery component', () => {
  it('Should render', () => {
    renderEl();
  });

});