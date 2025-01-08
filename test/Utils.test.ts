import { toUpperCase } from "../src/app/Utils";

describe('Utils test suite', ()=>{
    test('should reuturn uppercase', ()=>{
        const result = toUpperCase('abc');
        expect(result).toBe('ABC');
    })
});