import { getPlanById } from './filterPlans';

describe('[Logic] filterPlans > getPlanById', () => {
  it('Should return item with id 5', () => {
    const plans = {
      plan1: {
        id: 1,
      },
      plan5: {
        id: 5,
      },
      plan8: {
        id: 8,
      },
    }
    const search = 'plan5';
    const result = 5;

    expect(getPlanById(plans, search).id).toEqual(result);
  });
});
