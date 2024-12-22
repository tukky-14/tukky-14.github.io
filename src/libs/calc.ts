/**
 * date から今日までの「年・月・日」差を計算（実際の暦に準拠）
 * @param date 比較対象の日付
 * @returns { year, month, day }
 */
export const calcYearMonthDay = (date: Date, today: Date = new Date()) => {
    // 年・月・日ごとに差を計算
    let year = today.getFullYear() - date.getFullYear();
    let month = today.getMonth() - date.getMonth();
    let day = today.getDate() - date.getDate();

    // 日の差がマイナス → 前月の日数を足して1ヶ月分引く
    // 例: 3/1 (day=1) から 2/28 (day=28) を引くと -27 になるので、
    // 前月(2月)の日数を足して、month を1つ減らす
    if (day < 0) {
        // 今日の「前の月」が何日あったかを取得
        // JS の Date で 月に 0 を指定すると「前月の末日」が得られます
        const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();

        day += daysInPrevMonth;
        month--;
    }

    // 月の差がマイナス → 12ヶ月を足して年を1つ引く
    // 例: 1月から12月を引くと -11 になるため、month=1 だけ年を -1
    if (month < 0) {
        month += 12;
        year--;
    }

    return { year, month, day };
};
