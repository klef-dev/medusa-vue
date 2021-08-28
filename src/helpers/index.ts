export const formatPrice = (price: number, currency: string) => {
  return `${(price / 100).toFixed(2)} ${currency.toUpperCase()}`;
};
