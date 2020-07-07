import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { PlansContext } from 'contexts/PlansContext';
import { formatAmount, getCurrency } from 'logic/format';
import { getDiscountAmount } from 'logic/discount';
import { TEXTS } from 'logic/texts';
import {
  Container,
  Icon,
  Section,
  Title,
  TotalPrices,
  OldTotalPrice,
  NewTotalPrice,
  PlainText,
  ParcelSection,
  ParcelAmount,
} from './styles';

function Plan({ icon, data }) {
  const { period } = useContext(PlansContext);
  const { name, cycle } = data;
  const { priceOrder, months } = cycle[period];
  const discount = 40;
  const discountAmount = getDiscountAmount(priceOrder, discount);
  const amountWithDiscount = priceOrder - discountAmount;
  const parcel = amountWithDiscount / months;
  const currency = getCurrency();
  const showNew = months > 1;

  return (
    <Container>
      <Section>
        <Icon src={icon} alt="" />
        <Title>{name}</Title>
      </Section>
      <Section>
        <TotalPrices>
          <OldTotalPrice>{formatAmount(priceOrder)}</OldTotalPrice>
          {showNew && (
            <NewTotalPrice>
              {` ${formatAmount(amountWithDiscount)}`}
            </NewTotalPrice>
          )}
        </TotalPrices>
        <PlainText>{TEXTS.carousel.equivalent}</PlainText>
        <ParcelSection>
          {currency}
          <ParcelAmount>{formatAmount(parcel, false)}</ParcelAmount>
          {TEXTS.carousel.byMonth}
        </ParcelSection>
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
