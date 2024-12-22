/**
 * 経過日数の計算
 * @param date
 * @returns
 */
export const calcYearMontDay = (date: Date) => {
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // 経過した年月日を計算
    const year = Math.floor(diffDays / 365);
    const month = Math.floor((diffDays % 365) / 30);
    const day = (diffDays % 365) - month * 30;
    return { year, month, day };
};
