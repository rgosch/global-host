import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { PlansContext } from 'contexts/PlansContext';
import { formatAmount, getCurrency } from 'logic/format';
import { getDiscountAmount } from 'logic/discount';
import { TEXTS } from 'logic/texts';
import { PLANS } from 'logic/constants';
import { getPlanLink } from 'logic/link';

import { Badge } from 'visual/styles/badge';
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
  Hire,
  FreeDomain,
  SaveContainer,
  SaveAmount,
} from './styles';

function Plan({ icon, data, slug }) {
  const { period } = useContext(PlansContext);
  const { name, cycle, id } = data;
  const { priceOrder, months } = cycle[period];
  const promocode = 'PROMO40';
  const discount = 40;
  const discountAmount = getDiscountAmount(priceOrder, discount);
  const amountWithDiscount = priceOrder - discountAmount;
  const parcel = amountWithDiscount / months;
  const currency = getCurrency();
  const showNew = months > 1;
  const isBestSeller = slug === PLANS[1];
  const link = getPlanLink(id, period, promocode);

  return (
    <Container isBestSeller={isBestSeller}>
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
        <Hire as="a" href={link} contrast={isBestSeller}>
          {TEXTS.carousel.hire}
        </Hire>
        <FreeDomain>{TEXTS.carousel.freeDomain}</FreeDomain>
        <SaveContainer>
          <SaveAmount>
            {TEXTS.carousel.saveAmount(formatAmount(discountAmount))}
          </SaveAmount>
          <Badge>{TEXTS.carousel.discount(discount)}</Badge>
        </SaveContainer>
      </Section>
    </Container>
  );
}

Plan.propTypes = {
  icon: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cycle: PropTypes.shape({}),
    id: PropTypes.number,
  }).isRequired,
};

Plan.defaultProps = {};

export default Plan;
