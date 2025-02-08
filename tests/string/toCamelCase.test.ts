import { describe, it, expect } from 'vitest';
import { toCamelCase } from '../../src/string/toCamelCase';

describe('toCamelCase', () => {
    it("アンダースコア区切りの文字列をキャメルケースに変換できる", () => {
        expect(toCamelCase("hello_world")).toBe("helloWorld");
    });

    it("ハイフン区切りの文字列をキャメルケースに変換できる", () => {
        expect(toCamelCase("foo-bar-baz")).toBe("fooBarBaz");
    });

    it("空白区切りの文字列をキャメルケースに変換できる", () => {
        expect(toCamelCase("convert this string")).toBe("convertThisString");
    });

    it("大文字混在の文字列を適切にキャメルケースに変換できる", () => {
        expect(toCamelCase("Hello_World")).toBe("helloWorld");
    });

    it("すでにキャメルケースの文字列を変更しない", () => {
        expect(toCamelCase("alreadyCamelCase")).toBe("alreadyCamelCase");
    });

    it("すべて大文字の文字列を適切にキャメルケースに変換できる", () => {
        expect(toCamelCase("HELLO_WORLD")).toBe("helloWorld");
    });

    it("先頭や末尾に空白がある場合でも適切にキャメルケースに変換できる", () => {
        expect(toCamelCase("  hello world  ")).toBe("helloWorld");
    });

    it("数字が含まれるとエラーをスローする", () => {
        expect(() => toCamelCase("hello123")).toThrow("toCamelCase: input must contain only alphabets, underscores, hyphens, and spaces");
    });

    it("日本語が含まれるとエラーをスローする", () => {
        expect(() => toCamelCase("こんにちは")).toThrow("toCamelCase: input must contain only alphabets, underscores, hyphens, and spaces");
    });

    it("空文字を渡した場合はエラーをスローする", () => {
        expect(() => toCamelCase("")).toThrow("toCamelCase: input must contain only alphabets, underscores, hyphens, and spaces");
    });

    it("null を渡すとエラーをスローする", () => {
        expect(() => toCamelCase(null as unknown as string)).toThrow(TypeError);
    });

    it("undefined を渡すとエラーをスローする", () => {
        expect(() => toCamelCase(undefined as unknown as string)).toThrow(TypeError);
    });
});