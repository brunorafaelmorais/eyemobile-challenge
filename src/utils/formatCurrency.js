export default function formatCurrency(number) {
  return new Intl.NumberFormat('pt-BR', {
    currency: 'BRL'
  }).format(number)
}
