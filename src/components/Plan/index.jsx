import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { PlansContext } from 'contexts/PlansContext';
import { formatAmount } from 'logic/format';
import { getDiscountAmount } from 'logic/discount';
import {
  Container,
  Icon,
  Section,
  Title,
  TotalPrices,
  OldTotalPrice,
  NewTotalPrice,
} from './styles';

function Plan({ icon, data }) {
  const { period } = useContext(PlansContext);
  const { name, cycle } = data;
  const { priceOrder } = cycle[period];
  const discountAmount = getDiscountAmount(priceOrder, 40);

  return (
    <Container>
      <Section>
        <Icon src={icon} alt="" />
        <Title>{name}</Title>
      </Section>
      <Section>
        <TotalPrices>
          <OldTotalPrice>{formatAmount(priceOrder)}</OldTotalPrice>
          <NewTotalPrice>
            {` ${formatAmount(priceOrder - discountAmount)}`}
          </NewTotalPrice>
        </TotalPrices>
      </Section>
    </Container>
  );
}

Plan.propTypes = {
  icon: PropTypes.string.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cycle: PropTypes.shape({}),
  }).isRequired,
};

Plan.defaultProps = {};

export default Plan;
