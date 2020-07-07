import API from 'logic/api';

export async function getPlans() {
  const { data: { shared: { products } } } = await API().get('/prices');
  return products;
}
