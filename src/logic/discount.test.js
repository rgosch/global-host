import { getDiscountAmount } from './discount';

describe('[Logic] discount > getDiscountAmount', () => {
  it('Should returns 400', () => {
    const value = 1000;
    const discount = 40;
    const result = 400;

    expect(getDiscountAmount(value, discount)).toEqual(result);
  });

  it('Should returns 33.75', () => {
    const value = 225;
    const discount = 15;
    const result = 33.75;

    expect(getDiscountAmount(value, discount)).toEqual(result);
  });
});
