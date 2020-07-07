import React, { useContext } from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { PlansContext } from 'contexts/PlansContext';
import LoadingState from 'components/SliderCarousel/LoadingState';
import Plan from 'components/Plan';
import { getPlanById } from 'logic/filterPlans';
import { PLANS } from 'logic/constants';

import iconOneSVG from 'assets/img/icon-progress-one.svg';
import iconTwoSVG from 'assets/img/icon-progress-two.svg';
import iconThreeSVG from 'assets/img/icon-progress-three.svg';
import { Container } from './styles';

function SliderCarousel() {
  const { loading, error, plans } = useContext(PlansContext);
  const ready = !error && !loading;

  return (
    <Container>
      {loading && <LoadingState />}
      {ready && (
        <CarouselProvider
          naturalSlideWidth={300}
          naturalSlideHeight={400}
          visibleSlides={3}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}>
              <Plan
                icon={iconOneSVG}
                slug={PLANS[0]}
                data={getPlanById(plans, PLANS[0])}
              />
            </Slide>
            <Slide index={1}>
              <Plan
                icon={iconTwoSVG}
                slug={PLANS[1]}
                data={getPlanById(plans, PLANS[1])}
              />
            </Slide>
            <Slide index={2}>
              <Plan
                icon={iconThreeSVG}
                slug={PLANS[2]}
                data={getPlanById(plans, PLANS[2])}
              />
            </Slide>
          </Slider>
        </CarouselProvider>
      )}
    </Container>
  );
}

SliderCarousel.propTypes = {};

SliderCarousel.defaultProps = {};

export default SliderCarousel;
