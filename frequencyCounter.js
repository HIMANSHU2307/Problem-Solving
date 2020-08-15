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
