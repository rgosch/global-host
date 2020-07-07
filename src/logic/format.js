/**
 * Format Amount
 * 
 * @param {Number} amount 
 * @param {Boolean} withCurrency 
 * 
 * @returns {String}
 */
export function formatAmount(amount, withCurrency = true) {
  const fixed = Number(amount).toFixed(2);
  var formatter = new Intl.NumberFormat('pt-BR', {
    style: withCurrency ? 'currency' : undefined,
    currency: 'BRL',
  });

  return formatter.format(+fixed);
}

/**
 * Get Currency
 * 
 * @returns {String}
 */
export function getCurrency() {
  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  
  return formatter.formatToParts()[0].value;
}
