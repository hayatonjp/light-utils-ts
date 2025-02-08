export function getJapaneseDay(date: Date = new Date()): string {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        throw new TypeError("getJapaneseDay: argument must be a valid Date object");
    }

    const days = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
    const dayIndex = date.getDay();

    if (dayIndex < 0 || dayIndex > 6) {
        throw new Error("getJapaneseDay: unexpected date value");
    }

    return days[dayIndex];
}
