Problem(not using nested loop(O(n^2)): 
  same('hello', 'olelh')   // Output: true

Code:
  var str1 = "hello";
var str2 = "elolh";

function same() {
  if(str1.length != str2.length){
    return false;
  }
  let counter1 = {};
  let counter2 = {};

  for(var i of str1) {
    counter1[i] = (counter1[i] || 0) + 1;
  }
  for(var i of str2) {
    counter2[i] = (counter2[i] || 0) + 1;
  }
  for(var i in counter1){
    if(!(i in counter2)) {
      return false;
    }
    if(counter2[i] != counter1[i]){
      return false
    }
  }
  console.log(counter1, counter2);
  return true;
}

console.log(same()); // result


/////////////////////// OR //////////////////////////////////////
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')
