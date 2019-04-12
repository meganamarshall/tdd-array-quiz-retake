module.exports = function bigArray(array) {
  const filteredArray = array.filter(item => {
    if(item > 5) {
      return item;
    }
  });
  const finalArray = filteredArray.map(item => {
    return `Wow, ${item} is big!`;
  });
  return finalArray;
};
