// code
console.log('hello world');

// function
// generate random numbers between min and max
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// check if an item is stored inside an array
function scanArray(array, item) {
  var i = 0;
  while (i < array.length) {
    if (array[i] === item) {
      return true;
    }
    i++;
  }
  return false;
}

// check that a number is between min and max
function checkMinMax(min, max, number) {
  if (number >= min && number <= max) {
    return true;
  }
  return false;
}

// check if two arrays are exactly the same
function compareArray(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
