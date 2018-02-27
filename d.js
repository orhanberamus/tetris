var pos3 = [//t
  [1, 1, 1],
  [0, 1, 0],
  [0, 0, 0]
]
function trans(arr){
  var na = arr.slice(0);
  newarray = na[0].map((col, i) => na.map(row => row[i]));
  return newarray;
}
function changerows(arr1){
  // console.log(arr1[0].length);
  // console.log(arr1[0][0]);
  // console.log(arr1[1][0]);
  var newarr = [];
  for(var k = 0; k < arr1.length; k++){
    newarr[k] = arr1[k].slice();
  }
  for(var i = 0; i <  newarr[0].length; i++){//x
    //console.log(na[0].length);
      var temp;
      //
      // console.log("arr1[0]["+i +"]");
      // console.log(arr1[0][i]);
      //   console.log("arr1[1]["+i+"]");
      // console.log(arr1[2][i]);

      temp = newarr[0][i];
      newarr[0][i] = newarr[2][i];
      newarr[2][i] = temp;
  }
  return newarr;
}
console.log("pos3");
console.log(pos3);
var newarr = [];
newarr = changerows(pos3);
console.log(newarr);
console.log("pos3")
console.log(pos3)
