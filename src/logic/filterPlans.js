/**
 * Get Plan By Id
 * 
 * @param {Array{}} plans 
 * @param {String} id 
 */
export function getPlanById(plans, id) {
  return plans[id] || {};
}
