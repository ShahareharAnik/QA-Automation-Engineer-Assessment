export function parsePrice(priceText?: string) {
  if (!priceText) return 0;
  const cleaned = priceText.replace(/[^0-9.\-]/g, '');
  const parsed = parseFloat(cleaned);
  return Number.isFinite(parsed) ? parsed : 0;
}