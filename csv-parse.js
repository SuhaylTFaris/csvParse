/**
 * This function takes strings and/or integers, parses them and returns an array the arguments.
 */

module.exports = function csvParse(inputString) {
  /**
   * outputArray is a variable set to equal an empty array.
   */
  var outputArray = [];
  /**
  * inputArray is a variable, which will equal an array of the arguments passed to the function where each index is seperated by the commas.
  */
  inputArray = inputString.split(',');
  /**
  * this for loop will iterate over the length of the inputArray.
  * The if statement will check to see if the element at index i is not a number, if true, push that element to the outputArray. If false, see else statement.
  * The else statement will check the current element for quotes using regex, and then replace the quotes around the string with an empty string, effectively removeing the quotes, and then extra white space is removed with trim(). This is then pushed into the outputArray.
  * Finally the outputArray is returned.
  */
  for (var i = 0; i < inputArray.length; i++) {
    if (!Number.isNaN(+inputArray[i])) {
      outputArray.push(+inputArray[i]);
  } else {
    outputArray.push(inputArray[i].replace(/['"]+/g,'').trim());
  }
  }
  return outputArray;
};