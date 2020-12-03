import normalizer from './price-string-normalizer'

describe('price-string-normalizer function', () => {
    it('returns 0.00 when state is 0.00 and 0 is pressed', () => {
        expect(normalizer('0.000')).toBe('0.00')
    })
    it('returns 0.00 when state is 0.00 and backspace pressed', () => {
        expect(normalizer('0.0')).toBe('0.00')
    })
    it('returns 0.01 when state is 0.00 and 1 is pressed', () => {
        expect(normalizer('0.001')).toBe('0.01')
    })
    it('returns 0.01 when state is 0.10 and backspace is pressed', () => {
        expect(normalizer('0.1')).toBe('0.01')
    })
    it('returns 1200.50 when passed 120.050', () => {
        expect(normalizer('120.050')).toBe('1200.50')
    })
    it('returns 120.05 when passed 1200.5', () => {
        expect(normalizer('1200.5')).toBe('120.05')
    })
})
