import {palindrom} from "../exercise_3";

describe('the same reading in both directions', () => {
    it('test with string "abc"', () => {
        expect(palindrom('abc')).toBe('cba')
    }),
        it('test with empty string', () => {
            expect(palindrom('')).toBe('')
        })
})
