/**
 * @dev Use this to format currency accross the site
 * @param {Int} amount      The amount of money, 
 * This can be more that 2 DP this will cut the rest of the amount off depending on the currency
 * @param {Str} currency    The curency code for that currency
 * https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency
 * @param {Bool} debited    True if the money is being debited away
 * This adds a "-" to the formatted number
 * @returns A string with the number formatted for currency
 */
function formatCurrency(amount, currency, debited) {
    const formatter = new Intl.NumberFormat("en-US", {
        style: 'currency',
        currency: currency,
    });
    return (debited ? "- " : "") + formatter.format(amount);
}

export default formatCurrency;
