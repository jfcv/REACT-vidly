export function generateArray(number) {
  let accum = 0;
  return [...new Array(number)].map(() => {
    return ++accum;
  });
}
