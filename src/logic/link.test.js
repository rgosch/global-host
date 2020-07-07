import { getPlanLink } from './link';

describe('[Logic] link > getPlanLink', () => {
  it('Should returns /?a=add&pid=6&billingcycle=triennially&promocode=PROMO40', () => {
    const result = '/?a=add&pid=6&billingcycle=triennially&promocode=PROMO40';
    const pid = 6;
    const period = 'triennially';
    const promocode = 'PROMO40';

    expect(getPlanLink(pid, period, promocode)).toEqual(result);
  });
});
