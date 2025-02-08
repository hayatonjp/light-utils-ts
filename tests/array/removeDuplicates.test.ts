import { describe, it, expect } from 'vitest';
import { removeDuplicates } from '../../src/array/removeDuplicates';

describe('removeDuplicates', () => {
    it('重複を削除できる', () => {
        const input = [1, 2, 2, 3, 1];
        const result = removeDuplicates(input);
        expect(result).toEqual([1, 2, 3]);
    });

    it('空配列を渡すと空配列が返る', () => {
        const result = removeDuplicates([]);
        expect(result).toEqual([]);
    });

    it('配列以外を渡すとTypeErrorを投げる', () => {
        // @ts-expect-error : テストのためにわざと不正な値を渡す
        expect(() => removeDuplicates(123)).toThrow(TypeError);
    });
});