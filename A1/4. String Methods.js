// 1. charAt() - Returns the character at the specified index.
function strcharAt(str, index) {
  return str[index] || "";
}

// 2. toUpperCase() - Converts to UpperCase
function toUpperCase(str) {
  let result = "";

  for (let i = 0; str[i] !== undefined; i++) {
    let code = str[i].charCodeAt(0);
    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

// 3. toLowerCase() - Converts to LowerCase
function toLowerCase(str) {
  let result = "";

  for (let i = 0; str[i] !== undefined; i++) {
    let code = str[i].charCodeAt(0);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

// 4. trim() - Trims whitespaces from beginning and end of the string.
function strTrim(str) {
  let first = 0;
  let last = str.length - 1;

  while (str[fisrt] === " ") first++;
  while (str[end] === " ") last--;
  let result = " ";
  for (let i = first; i <= last; i++) {
    result += str[i];
  }
  return result;
}

// 5. indexOf() - Returns the index within this string of the first occurrence of searchValue, or -1 if not found.
function strIndexOf(str, substr) {
  for (let i = 0; i <= str.length - substr.length; i++) {
    let match = true;

    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }
  return -1;
}

// 6. includes() - Checks if string includes a substring or not
function strIncludes(str, subStr) {
  for (let i = 0; i <= str.length - subStr.length; i++) {
    let isPresent = true;

    for (let j = 0; j < subStr.length; j++) {
      if (str[i + j] !== subStr[j]) {
        isPresent = false;
        break;
      }
    }
    if (isPresent) return true;
  }
  return false;
}

// 7. concat() - Combines the text of two (or more) strings and returns a new string.
function strConcat(str1, str2) {
  return str1 + str2;
}

// 8. slice() - Extracts a section of a string and returns a new string.
function strSlice(str, start, end) {
  let result = "";
  if (start < 0) start = str.length + start;
  if (end < 0) end = str.length + end;

  for (let i = start; i < end && i < str.length; i++) {
    result += str[i];
  }
  return result;
}

// 9.  substr() - Returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
function strSubstr(str, start, length) {
  if (start < 0) {
    start = str.length + start;
    if (start < 0) start = 0;
  }
  let result = "";

  for (let i = start; i < start + length && i < str.length; i++) {
    result += str[i];
  }
  return result;
}

// 10. endsWith() - The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.
function strEndsWith(str, searchString) {
  for (let i = 0; i < searchString.length; i++) {
    if (str[str.length - searchString.length + i] !== searchString[i]) {
      return false;
    }
  }
  return true;
}
