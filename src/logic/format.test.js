import { formatAmount, getCurrency } from './format';

describe('[Logic] Format', () => {
  describe('formatAmount', () => {
    
    // The node have a i18n alternative
    xit('Should return R$ 15,25', () => {
      const value = 15.25948393;
      const result = 'R$ 15,25';

      expect(formatAmount(value)).toEqual(result);
    });
  });

  describe('getCurrency', () => {    
    it('Should return R$ ', () => {
      const result = 'R$';
      expect(getCurrency()).toEqual(result);
    });
  });
});
