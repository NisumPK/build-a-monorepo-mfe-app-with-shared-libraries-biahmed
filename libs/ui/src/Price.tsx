interface PriceProps {
  value: number;
}

export function Price({ value }: PriceProps) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

  return <span style={{ fontWeight: 'bold', color: '#2c5282' }}>{formatted}</span>;
}
