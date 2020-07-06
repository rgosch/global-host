import API from 'logic/api';

export async function getPlans() {
  const { shared: { products } } = await API().get('/prices');
  return products;
}
