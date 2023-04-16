export default function isDateInRange(date, fromDate, toDate) {
    const [fromDay, fromMonth, fromYear] = fromDate.split(/[/-]/);
    const [toDay, toMonth, toYear] = toDate.split(/[/-]/);
    const [inputDay, inputMonth, inputYear] = date.split(/[/-]/);

    const fromD = new Date(fromYear, fromMonth - 1, fromDay);
    const toD = new Date(toYear, toMonth - 1, toDay);
    const checkingDate = new Date(inputYear, inputMonth - 1, inputDay);

    return fromD.getTime() <= checkingDate.getTime() && checkingDate.getTime() <= toD.getTime();
}
