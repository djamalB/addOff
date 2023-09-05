let arr = [1, 2, 3, 4, 0, -1, -2];

let acm = 0;

let i = 0;

while (i < arr.length) {
  if (arr[i] > 0) {
    acm += arr[i];
  }
  i++; 
}

console.log(acm); 
