function count(str) {
  const { length } = str;
  let result = false;

  if (length >= 1 && length <= 10) {
    result = true;
  }

  return result;
}

module.exports = {
  count,
  reverse,
  calculator,
  capitalize,
};