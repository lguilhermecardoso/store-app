import { currencyFormatter } from '../formaters';

describe('currencyFormatter test', () => {
  it('should format number to BRL currency', () => {
    const value = 1234.56;
    const formattedValue = currencyFormatter(value);
    expect(formattedValue).toBe('R$ 1.234,56');
  });
});