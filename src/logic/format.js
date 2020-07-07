/**
 * Format Amount
 * 
 * @param {Number|String} amount 
 * @returns {String}
 */
export function formatAmount(amount) {
  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  
  return formatter.format(amount);
}
