export const TEXTS = {
  title: 'GlobalHost',
  loading: 'Carregando',
  periods: [
    { id: 'triennially', title: '3 anos' },
    { id: 'biennially', title: '1 ano' },
    { id: 'monthly', title: '1 mês' },
  ],
  periodTitle: 'Quero pagar a cada:',
  carousel: {
    equivalent: 'equivalente a',
    byMonth: '/mês*',
    hire: 'Contrate Agora',
    freeDomain: '1 ano de Domínio Grátis',
    saveAmount: (amount) => `economize ${amount}`,
    discount: (value) => `${value}% OFF`,
  }
}
