/**
 * Get Plan Link
 * 
 * @param {String} pid 
 * @param {String} period 
 * @param {String} promocode 
 * 
 * @returns {String}
 */
export function getPlanLink(pid, period, promocode) {
  return `/?a=add&pid=${pid}&billingcycle=${period}&promocode=${promocode}`;
};
