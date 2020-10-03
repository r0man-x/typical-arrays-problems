
exports.min = function min (array) {
    if (!array || array.length === 0) return 0;
    let currentMin = array[0];
    array.forEach((value) => {
      if (value < currentMin) currentMin = value;
    })
    return currentMin;
  }
  
  exports.max = function max (array) {
    if (!array || array.length === 0) return 0;
    let currentMax = array[0];
    array.forEach((value) => {
      if (value > currentMax) currentMax = value;
    })
    return currentMax;
  }
  
  exports.avg = function avg (array) {
    if (!array || array.length === 0) return 0;
    return array.reduce((total, current) => total += current) / array.length;
  }
