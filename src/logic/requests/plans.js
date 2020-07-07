import API from 'logic/api';

/**
 * Get Plans
 * 
 * @returns {Object}
 */
export async function getPlans() {
  const { data: { shared: { products } } } = await API().get('/prices');
  return products;
}
