export function toCamelCase(str: String): String {
    if (typeof str !== 'string') {
        throw new TypeError('toCamelCase: argument must be a string');
    }
    if (!/^[a-zA-Z_\- ]+$/.test(str)) {
        throw new Error("toCamelCase: input must contain only alphabets, underscores, hyphens, and spaces");
    }
    // すでにキャメルケースの場合はそのまま返す
    if (/^[a-z]+([A-Z][a-z]*)+$/.test(str)) {
        return str;
    }
    
    return str
        .trim()                       // 前後の空白を削除
        .toLowerCase()                // 小文字に統一
        .replace(/[_-]/g, " ")        // _ や - をスペースに変換
        .split(" ")                   // 単語に分割
        .map((word, index) =>
            index === 0 
                ? word                // 最初の単語はそのまま
                : word.charAt(0).toUpperCase() + word.slice(1) // 2単語目以降を大文字化
        )
        .join("");
}