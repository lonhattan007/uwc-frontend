const paginationRange = (activePage, pageCount, displayCount) => {
  const range = [];
  let start = Math.max(1, activePage - Math.floor(displayCount / 2));
  let end = Math.min(pageCount, start + displayCount - 1);

  if (end - start < displayCount - 1) {
    start = Math.max(1, end - displayCount + 1);
  }

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  return range;
};

export default paginationRange;
