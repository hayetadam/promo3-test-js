it('should be true', () => {
    expect(true).toBe(true);
});
describe('function addisionner', () => {
    it('should add 2 to 2', () => {
        let resultat = additionner(2, 2);
        expect(resultat).toBe(4);
    });
    it('should add whith negative numbers', () => {
        expect(additionner(-2, -2)).toBe(-4);
    });
    it('should concatenate string params', () => {
        expect(additionner('bloup', 2)).toBe('bloup2');
    });
});