import React, { useEffect, useContext } from 'react';

import { Wrapper } from 'visual/styles/Wrapper';
import SliderCarousel from 'components/SliderCarousel';

import { PlansContext } from 'contexts/PlansContext';
import { Container } from './styles';

function Main() {
  const { fetch } = useContext(PlansContext);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <Container>
      <Wrapper>
        <SliderCarousel />
      </Wrapper>
    </Container>
  );
}

export default Main;
