import { describe, it, expect } from "vitest";
import { toKebabCase } from "../../src/string/toKebabCase";

describe("toKebabCase", () => {
    it("アンダースコア区切りの文字列をケバブケースに変換できる", () => {
        expect(toKebabCase("hello_world")).toBe("hello-world");
    });

    it("スペース区切りの文字列をケバブケースに変換できる", () => {
        expect(toKebabCase("convert this string")).toBe("convert-this-string");
    });

    it("PascalCase の文字列をケバブケースに変換できる", () => {
        expect(toKebabCase("HelloWorld")).toBe("hello-world");
    });

    it("camelCase の文字列をケバブケースに変換できる", () => {
        expect(toKebabCase("alreadyCamelCase")).toBe("already-camel-case");
    });

    it("すべて大文字の文字列を適切にケバブケースに変換できる", () => {
        expect(toKebabCase("HELLO WORLD")).toBe("hello-world");
    });

    it("ハイフン区切りの文字列を変更しない", () => {
        expect(toKebabCase("already-kebab-case")).toBe("already-kebab-case");
    });

    it("先頭や末尾に空白がある場合でも適切にケバブケースに変換できる", () => {
        expect(toKebabCase("  hello world  ")).toBe("hello-world");
    });

    it("数字が含まれるとエラーをスローする", () => {
        expect(() => toKebabCase("hello123")).toThrow("toKebabCase: input must contain only alphabets, numbers, underscores, hyphens, and spaces");
    });

    it("日本語が含まれるとエラーをスローする", () => {
        expect(() => toKebabCase("こんにちは")).toThrow("toKebabCase: input must contain only alphabets, numbers, underscores, hyphens, and spaces");
    });

    it("空文字を渡した場合はエラーをスローする", () => {
        expect(() => toKebabCase("")).toThrow("toKebabCase: input must contain only alphabets, numbers, underscores, hyphens, and spaces");
    });

    it("null を渡すとエラーをスローする", () => {
        expect(() => toKebabCase(null as unknown as string)).toThrow(TypeError);
    });

    it("undefined を渡すとエラーをスローする", () => {
        expect(() => toKebabCase(undefined as unknown as string)).toThrow(TypeError);
    });
});
