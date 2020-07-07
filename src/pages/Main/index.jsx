import React, { useEffect, useContext } from 'react';

import { Wrapper } from 'visual/styles/Wrapper';
import { PlansContext } from 'contexts/PlansContext';
import SliderCarousel from 'components/SliderCarousel';
import PeriodSelector from 'components/PeriodSelector';

import { Container } from './styles';

function Main() {
  const { fetch } = useContext(PlansContext);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <Container>
      <Wrapper>
        <PeriodSelector />
        <SliderCarousel />
      </Wrapper>
    </Container>
  );
}

export default Main;
