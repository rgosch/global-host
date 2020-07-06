import React, { useContext } from 'react';
import { CarouselProvider, Slider } from 'pure-react-carousel';

import { PlansContext } from 'contexts/PlansContext';
import LoadingState from 'components/SliderCarousel/LoadingState';

import { Container } from './styles';

function SliderCarousel() {
  const { loading, error } = useContext(PlansContext);
  const ready = !error && !loading;

  return (
    <Container>
      {loading && <LoadingState />}
      {ready && (
        <CarouselProvider>
          <Slider />
        </CarouselProvider>
      )}
    </Container>
  );
}

SliderCarousel.propTypes = {};

SliderCarousel.defaultProps = {};

export default SliderCarousel;
