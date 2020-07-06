import React from 'react';
import { CarouselProvider, Slider } from 'pure-react-carousel';

import { Container } from './styles';

function SliderCarousel() {
  return (
    <Container>
      <CarouselProvider>
        <Slider />
      </CarouselProvider>
    </Container>
  );
}

SliderCarousel.propTypes = {};

SliderCarousel.defaultProps = {};

export default SliderCarousel;
