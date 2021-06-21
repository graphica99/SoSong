var arr = [4, 5, 6, 8, 9];
var index = [1, 2, 0, 3, 4];
for (var i = 0; i < arr.length; i++) {
  console.log(index[i]);
  console.log(arr[i]);
  arrRes[index[i]] = arr[i];
  console.log(arrRes);
}

for (var i = 0; i < arr.length; i++) {
  arr[i] = arrRes[i];
  index[i] = i;
}

arrRes;
