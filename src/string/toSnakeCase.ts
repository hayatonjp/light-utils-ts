export function toSnakeCase(str: string): string {
    if (typeof str !== "string") {
        throw new TypeError("toSnakeCase: argument must be a string");
    }
    if (!/^[a-zA-Z_\- ]+$/.test(str)) {
        throw new Error("toSnakeCase: input must contain only alphabets, numbers, underscores, hyphens, and spaces");
    }
    // すでにスネークケース（snake_case）の場合はそのまま返す
    if (/^[a-z]+(_[a-z]+)*$/.test(str)) {
        return str;
    }

    return str
        .trim() // 前後の空白を削除
        .replace(/([a-z])([A-Z])/g, "$1_$2") // 小文字 + 大文字の間にアンダースコアを挿入（camelCase対応）
        .replace(/([A-Z])([A-Z][a-z])/g, "$1_$2") // 連続する大文字の区切りを修正（PascalCase対応）
        .replace(/[-\s]+/g, "_") // ハイフンやスペースをアンダースコアに統一
        .toLowerCase(); // 小文字に統一
}
