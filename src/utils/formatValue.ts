const formatCurrency = (value: number): string =>
  new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

// const formatDate = (value: Date): string =>
// new Intl.DateTimeFormat('pt-BR').format(new Date(value));

export default formatCurrency;
