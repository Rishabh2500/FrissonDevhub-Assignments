// 1. at() - Returns the array item at the given index. Accepts negative integers, which count back from the last item.
function elementAt(arr, index) {
  if (index < 0) {
    index = arr.length + index;
  }

  if (index >= 0 && index < arr.length) {
    return arr[index];
  }
  return undefined;
}

// 2. indexOf() - to find the index of an item in an array
function index(arr) {
  let userInput = prompt("Enter element whose index is to be found:");
  for (let first = 0; first < arr.length; first++) {
    if (arr[first] == userInput) {
      return first;
    }
  }
  return undefined;
}

// 3. push() - to add element at the end of an array
function arrPush(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

// 4. pop() - to remove the lat element from the array
function arrPop(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  const last = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return last;
}

// 5. reverse() - to reverse the elements in an array
function arrReverse(arr) {
  if (arr.length <= 1) return arr;

  let first = 0;
  let last = arr.length - 1;

  while (first < last) {
    let temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
    first++;
    last--;
  }
  return arr;
}

// 6. shift() - to delete first element from an array
function arrShift(arr) {
  if (arr.length === 0) return undefined;

  let first = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return first;
}

// 7. unshift() - adds element/s at the begining of the array
function arrUnshift(arr, val) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  return arr.length;
}

// 8. concat() - combines two arrays
function arrConcat(arr1, arr2) {
  let result = [...arr1];
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  return result;
}

// 9. join() - Joins all elements of an array into a string
function arrJoin(arr, separator) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) result += separator;
  }
  return result;
}

// 10. includes() - checks if an array contains a particular value or not
function arrInclude(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
}
