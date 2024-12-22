import { calcYearMonthDay } from '../../libs/calc';

describe('calcYearMonthDay 関数のテスト', () => {
    // テスト時点の today を固定して、経過日数の結果がブレないようにする
    // ここでは 2023-01-01T00:00:00.000Z を仮の「今日」としてモックにします。
    beforeAll(() => {
        // Jest のタイマーモックを有効に
        jest.useFakeTimers();
        // 現在時刻を 2023-01-01T00:00:00.000Z に固定
        jest.setSystemTime(new Date('2023-01-01T00:00:00.000Z'));
    });

    afterAll(() => {
        // 元に戻す
        jest.useRealTimers();
    });

    it('当日と同じ日付を渡した場合は、year=0, month=0, day=0 が返る', () => {
        const sameDay = new Date('2023-01-01T00:00:00');
        const result = calcYearMonthDay(sameDay);
        expect(result).toEqual({ year: 0, month: 0, day: 0 });
    });

    it('1日前の日付を渡した場合は、day=1 が返る (year=0, month=0)', () => {
        // 1日前 => 2022-12-31
        const oneDayBefore = new Date('2022-12-31T00:00:00');
        const result = calcYearMonthDay(oneDayBefore);
        expect(result).toEqual({ year: 0, month: 0, day: 1 });
    });

    it('365日前の日付なら、ちょうど year=1, month=0, day=0', () => {
        // 365日前 => 2022-01-01
        const threeSixtyFiveDaysBefore = new Date('2022-01-01T00:00:00');
        const result = calcYearMonthDay(threeSixtyFiveDaysBefore);
        expect(result).toEqual({ year: 1, month: 0, day: 0 });
    });

    it('366日前の日付なら、year=1, month=0, day=1', () => {
        // 366日前 => 2021-12-31
        const threeSixtySixDaysBefore = new Date('2021-12-31T00:00:00');
        const result = calcYearMonthDay(threeSixtySixDaysBefore);
        expect(result).toEqual({ year: 1, month: 0, day: 1 });
    });

    it('730日前(=365×2) なら year=2, month=0, day=0', () => {
        // 730日前 => 2021-01-01
        const sevenThirtyDaysBefore = new Date('2021-01-01T00:00:00');
        const result = calcYearMonthDay(sevenThirtyDaysBefore);
        expect(result).toEqual({ year: 2, month: 0, day: 0 });
    });
});
