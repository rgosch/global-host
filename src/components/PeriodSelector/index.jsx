import React, { useContext } from 'react';

import PeriodItem from 'components/PeriodSelector/PeriodItem';
import { PlansContext } from 'contexts/PlansContext';
import { TEXTS } from 'logic/texts';

import { Container, Content, Title } from './styles';

function PeriodSelector() {
  const { periods } = TEXTS;
  const { period } = useContext(PlansContext);

  return (
    <Container>
      <Title>{TEXTS.periodTitle}</Title>
      <Content>
        {periods.map(({ id, title }) => (
          <PeriodItem key={id} title={title} id={id} selected={period === id} />
        ))}
      </Content>
    </Container>
  );
}

PeriodSelector.propTypes = {};

PeriodSelector.defaultProps = {};

export default PeriodSelector;
