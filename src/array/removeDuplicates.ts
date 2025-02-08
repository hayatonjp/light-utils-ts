export function removeDuplicates<T>(array: T[]): T[] {
    if (!Array.isArray(array)) {
      throw new TypeError('removeDuplicates: argument must be an array');
    }
    return Array.from(new Set(array));
}