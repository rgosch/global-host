import React from 'react';

import Loader from 'components/Loader';

import { Container } from './styles';

function LoadingState() {
  return (
    <Container>
      <Loader />
    </Container>
  );
}

LoadingState.propTypes = {};

LoadingState.defaultProps = {};

export default LoadingState;
