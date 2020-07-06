import React from 'react';

import logoSVG from 'assets/img/logo-white.svg';
import { TEXTS } from 'logic/texts';
import { Container, Logo, Title } from './styles';

function Header() {
  return (
    <Container>
      <Title>{TEXTS.title}</Title>
      <Logo src={logoSVG} alt={TEXTS.title} />
    </Container>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
