const compareTwoDate = function (date1, date2) {
  const [day1, month1, year1] = date1.split(/[/-]/);
  const [day2, month2, year2] = date2.split(/[/-]/);

  const dateObj1 = new Date(year1, month1 - 1, day1);
  const dateObj2 = new Date(year2, month2 - 1, day2);

  return dateObj1.getTime() === dateObj2.getTime();
};

export default compareTwoDate;
