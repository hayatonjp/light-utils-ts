import { describe, it, expect } from 'vitest';
import { chunk } from '../../src/array/chunk';

describe('chunk', () => {
    it('配列が size の倍数で分割できる', () => {
        const input = [1, 2, 3, 4, 5, 6];
        const result = chunk(input, 2);
        expect(result).toEqual([[1, 2], [3, 4], [5, 6]]);
    });

    it('最後のチャンクが size に満たない場合でも分割できる', () => {
        const input = [1, 2, 3, 4, 5];
        const result = chunk(input, 2);
        expect(result).toEqual([[1, 2], [3, 4], [5]]);
    })

    it('size が配列長以上の場合は入力配列がそのまま返却されるか', () => {
        const input = [1, 2, 3];
        const result = chunk(input, 5);
        expect(result).toEqual([1, 2, 3]); 
    })

    it('空の配列を渡すと空配列を返す', () => {
        const input = [];
        const result = chunk(input, 2);
        expect(result).toEqual([]);
    })

    it('size=1 の場合にエラーなく分割されるか', () => {
        const input = [1, 2, 3, 4, 5, 6];
        const result = chunk(input, 1);
        expect(result).toEqual([[1], [2], [3], [4], [5], [6]]);
    })

    it('size=0 の場合は入力配列がそのまま返却されるか', () => {
        const input = [1, 2, 3, 4, 5, 6];
        const result = chunk(input, 0);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    })

    it('size=負の数 の場合はエラーが返却されるか', () => {
        const input = [1, 2, 3, 4, 5, 6];
        expect(() => chunk(input, -1)).toThrow(RangeError);
    })

    it('size=NaN の場合はエラーが返却されるか', () => {
        const input = [1, 2, 3, 4, 5, 6];
        expect(() => chunk(input, NaN)).toThrow(RangeError);
    })

    it('文字列の配列でも正常に分割されるか', () => {
        const input = ["a", "b", "c", "d", "e"];
        const result = chunk(input, 2);
        expect(result).toEqual([["a", "b"], ["c", "d"], ["e"]]);
    })

    it('オブジェクトの配列でも正常に分割されるか', () => {
        const input = [{ id: 1 }, { id: 2 }, { id: 3 }];
        const result = chunk(input, 2);
        expect(result).toEqual([[{ id: 1 }, { id: 2 }], [{ id: 3 }]]);
    })
});