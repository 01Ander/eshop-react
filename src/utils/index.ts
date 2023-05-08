// Note: Utility functions
/**
 * This function returns the total price of all products of a new order
* @param {Product[]} products - Array of products
* @returns {number} - Total price of all products
*/

export const totalPrices = (products: Product[]) => {
  return products.reduce((acc: number, product: Product) => {
    return acc + product.price;
  }, 0);
};
