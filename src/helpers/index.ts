export const formatPrice = (price: number, currency: string): string => {
  return `${(price / 100).toFixed(2)} ${currency.toUpperCase()}`;
};
