import { describe, it, expect } from "vitest";
import { getJapaneseDay } from "../../../src/date/jp/getJapaneseDay";

describe("getJapaneseDay", () => {
    it("正しい曜日を取得できる", () => {
        expect(getJapaneseDay(new Date("2024-02-10"))).toBe("土曜日");
        expect(getJapaneseDay(new Date("2024-02-11"))).toBe("日曜日");
        expect(getJapaneseDay(new Date("2024-02-12"))).toBe("月曜日");
    });

    it("現在の曜日を取得できる（現在の日付でチェック）", () => {
        const today = new Date();
        const expected = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"][today.getDay()];
        expect(getJapaneseDay()).toBe(expected);
    });

    it("無効な日付を渡すとエラーをスローする", () => {
        expect(() => getJapaneseDay(new Date("invalid-date"))).toThrow(TypeError);
        expect(() => getJapaneseDay(null as unknown as Date)).toThrow(TypeError);
        expect(() => getJapaneseDay("2024-02-10" as unknown as Date)).toThrow(TypeError);
    });
});
