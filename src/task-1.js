function stringLength(str){
  let len = str.length
  if(len >= 1 && len <= 10){
      return len
  }
  throw('the length of the string is not in the range of 1 to 10');
}

module.exports = stringLength