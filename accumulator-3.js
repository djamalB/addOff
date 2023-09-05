let arr = ["html", "css", "js", "ts", "pyton"];

let acm = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 3) {
    acm.push(arr[i]);
  }
}
console.log(acm);
