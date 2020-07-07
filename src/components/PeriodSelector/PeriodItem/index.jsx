import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { PlansContext } from 'contexts/PlansContext';
import { Container, Input, FakeInput, Title } from './styles';

function PeriodItem({ selected, title, id }) {
  const { setPeriod } = useContext(PlansContext);

  return (
    <Container selected={selected} htmlFor={id}>
      <Input
        id={id}
        type="radio"
        value={id}
        title={title}
        name="period"
        onChange={() => setPeriod(id)}
      />
      <FakeInput htmlFor={id} aria-hidden title={title} selected={selected} />
      <Title htmlFor={id} selected={selected}>
        {title}
      </Title>
    </Container>
  );
}

PeriodItem.propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

PeriodItem.defaultProps = {
  selected: false,
};

export default PeriodItem;
