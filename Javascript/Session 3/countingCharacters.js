// str - string to search
// search - characters to find in str
function countingCharacters4(str, search) {
    var count = 0; // number found
    var numChars = search.length;
  
    // We need to stop looping based on multiple characters.
    // Example: if searching "Ohio" with 3 characters at a time we want to stop at 'h'
    // so we do not go past the end of the string.
    var lastIndex = str.length - numChars;
  
    // This time, we are looking for a series of characters - a substring.
    for (var index = 0; index <= lastIndex; index++) {
      // substring gets a part of a string from a start to end index
      var current = str.substring(index, index + numChars);
      // if the substring matches our series, increase our counter
      if (current == search) {
        count++;
      }
    }
    return count;
  }