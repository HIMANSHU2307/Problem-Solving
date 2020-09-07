
// REFACTORING: To get array of two values with a sum of 0 from a sorted array

const arr =[-2, -1, 0, 1, 2];

function sumZero(arr) {
  let left = 0;
  let right = arr.length -1;
  
  while(left < right) {
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]];
    } else if(sum > 0) {
      right--;
    } else {
      left++;
    }
  }

}

console.log(sumZero(arr));
// Output : [2, -2]

// Time Complexity O(n)
// Space O(1)



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// REFACTORING: To count the unique values from a sorted array

const arr =[1, 1, 1, 1, 1, 2, 3]; // 3(3 unique numbers)


function countUniqueValues(arr) {
  var i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i+1;
}

console.log(countUniqueValues(arr));
