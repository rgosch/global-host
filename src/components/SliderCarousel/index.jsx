import React, { useContext } from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { useWindowWidth } from '@react-hook/window-size';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { PlansContext } from 'contexts/PlansContext';
import LoadingState from 'components/SliderCarousel/LoadingState';
import Plan from 'components/Plan';
import { getPlanById } from 'logic/filterPlans';
import { PLANS } from 'logic/constants';

import iconOneSVG from 'assets/img/icon-progress-one.svg';
import iconTwoSVG from 'assets/img/icon-progress-two.svg';
import iconThreeSVG from 'assets/img/icon-progress-three.svg';
import { getVisibleSlides, checkBreakpoint } from './helper';
import { Container } from './styles';

function SliderCarousel() {
  const { loading, error, plans } = useContext(PlansContext);
  const width = useWindowWidth();
  const ready = !error && !loading;
  const { isMobile, isTablet } = checkBreakpoint(width);
  const visibleSlides = getVisibleSlides(width);

  return (
    <Container>
      {loading && <LoadingState />}
      {ready && (
        <CarouselProvider
          naturalSlideWidth={300}
          naturalSlideHeight={400}
          visibleSlides={visibleSlides}
          currentSlide={isMobile ? 1 : 0}
          totalSlides={3}
          dragEnabled={isMobile || isTablet}
          lockOnWindowScroll
        >
          <Slider trayTag="div">
            <Slide className="slide" tag="article" index={0}>
              <Plan
                icon={iconOneSVG}
                slug={PLANS[0]}
                data={getPlanById(plans, PLANS[0])}
              />
            </Slide>
            <Slide className="slide" tag="article" index={1}>
              <Plan
                icon={iconTwoSVG}
                slug={PLANS[1]}
                data={getPlanById(plans, PLANS[1])}
              />
            </Slide>
            <Slide className="slide" tag="article" index={2}>
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
