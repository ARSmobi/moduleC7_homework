import { sum, definePrime } from "../sum";

describe('test for definePrime', () => {
    it('should be correct with simple number', () => {
        expect(definePrime(17)).toBe('Число 17 - простое число');
    }),
        it('should be correct with simple number', () => {
            expect(definePrime(16)).toBe('Число 16 - составное число');
        })
})

describe('test function sum', () => {
    it('addition 2 and 3', () => {
        expect(sum(2, 3)).toBe(5)
    })
})
