export function chunk<T>(arr: T[], size: number): T[] | T[][] {
    if (!Array.isArray(arr)) {
        throw new TypeError('chunk: argument must be an array');
    }
    if (!Number.isInteger(size) || size < 0) {
        throw new RangeError('chunk: size must be a positive integer');
    }
    if (arr.length <= size || size == 0) {
        return arr;
    }
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}