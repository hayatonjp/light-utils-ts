import { describe, it, expect } from "vitest";
import { toSnakeCase } from "../../src/string/toSnakeCase";

describe("toSnakeCase", () => {
    it("アンダースコア区切りの文字列を変更しない", () => {
        expect(toSnakeCase("already_snake_case")).toBe("already_snake_case");
    });

    it("camelCase をスネークケースに変換できる", () => {
        expect(toSnakeCase("helloWorld")).toBe("hello_world");
    });

    it("PascalCase をスネークケースに変換できる", () => {
        expect(toSnakeCase("HelloWorld")).toBe("hello_world");
    });

    it("スペース区切りの文字列をスネークケースに変換できる", () => {
        expect(toSnakeCase("convert this string")).toBe("convert_this_string");
    });

    it("ハイフン区切りの文字列をスネークケースに変換できる", () => {
        expect(toSnakeCase("foo-bar-baz")).toBe("foo_bar_baz");
    });

    it("すべて大文字の文字列をスネークケースに変換できる", () => {
        expect(toSnakeCase("HELLO WORLD")).toBe("hello_world");
    });

    it("先頭や末尾に空白がある場合でも適切にスネークケースに変換できる", () => {
        expect(toSnakeCase("  hello world  ")).toBe("hello_world");
    });

    it("数字が含まれるとエラーをスローする", () => {
        expect(() => toSnakeCase("hello123")).toThrow("toSnakeCase: input must contain only alphabets, numbers, underscores, hyphens, and spaces");
    });

    it("日本語が含まれるとエラーをスローする", () => {
        expect(() => toSnakeCase("こんにちは")).toThrow("toSnakeCase: input must contain only alphabets, numbers, underscores, hyphens, and spaces");
    });

    it("空文字を渡した場合はエラーをスローする", () => {
        expect(() => toSnakeCase("")).toThrow("toSnakeCase: input must contain only alphabets, numbers, underscores, hyphens, and spaces");
    });

    it("null を渡すとエラーをスローする", () => {
        expect(() => toSnakeCase(null as unknown as string)).toThrow(TypeError);
    });

    it("undefined を渡すとエラーをスローする", () => {
        expect(() => toSnakeCase(undefined as unknown as string)).toThrow(TypeError);
    });
});
