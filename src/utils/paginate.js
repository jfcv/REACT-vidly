export function paginate(items, pageNumber, pageSize) {
  const { length } = items;
  const factor = pageNumber - 1;
  const startIndex = pageSize * factor;
  let endIndex = pageSize * (factor + 1);
  endIndex = endIndex > length ? length : endIndex;
  return items.filter((item, index) => index >= startIndex && index < endIndex);
}
