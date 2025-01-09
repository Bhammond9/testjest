import { getStringInfo, toUpperCase } from "../src/app/Utils";

describe('Utils test suite', ()=>{
    it('should reuturn uppercase of a valid string', ()=>{

        //arrange:
        const sut = toUpperCase;
        const expected = 'ABC'

        // act:
        const actual = sut('abc');

        // assert:
        expect (actual).toBe(expected)
    })

    describe('ToUpperCase examples', ()=>{
        it.each([
            {input:'abc', expected: 'ABC'},
            {input:'My-String', expected: 'MY-STRING'},
            {input:'def', expected: 'DEF'}
        ])('$input toUpperCase should be $expected', ({input, expected})=>{
            const actual = toUpperCase(input);
            expect(actual).toBe(expected);
        });
    })


    describe('getStringInfo for arg My-String should', ()=>{
        
        test('return right length', ()=>{
            const actual = getStringInfo('My-String');
            expect(actual.characters).toHaveLength(9);
        });
        test('return right lower case', ()=>{
            const actual = getStringInfo('My-String');
            expect(actual.lowerCase).toBe('my-string');
        });
        test('return right upper case', ()=>{
            const actual = getStringInfo('My-String');
            expect(actual.upperCase).toBe('MY-STRING');
        });
        test('return right characters', ()=>{
            const actual = getStringInfo('My-String');
            expect(actual.characters).toEqual(['M', 'y', '-','S', 't', 'r','i', 'n', 'g']);
            expect(actual.characters).toContain<string>('M');
            expect(actual.characters).toEqual(
                expect.arrayContaining(['S', 't', 'r','i', 'n', 'g', 'M', 'y', '-'])
            );
        });
        test('return defined extra info', ()=>{
            const actual = getStringInfo('My-String');
            expect(actual.extraInfo).toBeDefined();
        });
        test('return right extra info', ()=>{
            const actual = getStringInfo('My-String');
            expect(actual.extraInfo).toEqual({})
        });

    it('should return info for valid string', ()=> {
        const actual = getStringInfo('My-String');

        expect(actual.extraInfo).toEqual({})

        expect(actual.extraInfo).not.toBe(undefined);
        expect(actual.extraInfo).not.toBeUndefined();
        expect(actual.extraInfo).toBeDefined();
        expect(actual.extraInfo).toBeTruthy();
    });
});

});