import React from 'react';

import logoSVG from 'assets/img/logo-white.svg';
import { TEXTS } from 'logic/texts';
import { Link } from 'react-router-dom';
import { ROUTES } from 'logic/constants';
import { Container, Logo, Title } from './styles';

function Header() {
  return (
    <Container>
      <Title>{TEXTS.title}</Title>
      <Link to={ROUTES.MAIN}>
        <Logo src={logoSVG} alt={TEXTS.title} />
      </Link>
    </Container>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
