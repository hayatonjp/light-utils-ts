export function toKebabCase(str: String): String {
    if (typeof str !== 'string') {
        throw new TypeError('toKebabCase: argument must be a string');
    }
    if (!/^[a-zA-Z_\- ]+$/.test(str)) {
        throw new Error("toKebabCase: input must contain only alphabets, numbers, underscores, hyphens, and spaces");
    }
    // すでにケバブケースの場合はそのまま返す
    if (/^[a-z]+(-[a-z]+)*$/.test(str)) {
        return str;
    }
    
    return str
        .trim()                       // 前後の空白を削除
        .replace(/([a-z])([A-Z])/g, "$1 $2") // 小文字 + 大文字の間にスペースを挿入（camelCase対応）
        .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // 連続する大文字の区切りを修正（PascalCase対応）
        .replace(/[_\s]+/g, "-")      // アンダースコアやスペースをハイフンに統一
        .toLowerCase()                // 小文字に統一
}