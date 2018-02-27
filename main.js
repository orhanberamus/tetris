$(function() {
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  //ctx.scale(20, 20);
  var width = c.width;
  var height = c.height;
  var res = width / 20;
  var gravity = 0;
  var rand = Math.floor((Math.random() * 5));
  var keychangable = true;
  var x = (width / 2) - res;
  var pos1 = [//cubuk
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]
  ];
  var pos2 = [//kare
    [1, 1],
    [1, 1]
  ]
   var pos3 = [//t
     [1, 1, 1],
     [0, 1, 0],
     [0, 0, 0]
   ]
   var pos4 = [//z
     [1, 1, 0],
     [0, 1, 1],
     [0, 0, 0]
   ]
   var pos5 = [//l
     [0, 1, 1],
     [0, 1, 0],
     [0, 1, 0]
   ]
   var positions = [];
   positions.push(pos1);
   positions.push(pos2);
   positions.push(pos3);
   positions.push(pos4);
   positions.push(pos5);

   var pos = positions[rand];
   var counter = 1;
 //piece1.draw();
  //var block = new Block(ctx, res, res, res, gravity);//x col y row


  function getrotatedpos(index, dir){
    console.log(counter % 4);
    //console.log(positions[index]);
    //console.log(index);
    var newarr = [];
    if(index !== 1){
      if(dir % 4 === 0){
        newarr = positions[index];
      }else if(dir % 4 === 1){
        newarr = trans(positions[index]);
      }
      else if(dir % 4 === 2){
        newarr = changerows(positions[index]);
      }
      else if(dir % 4 === 3){
        var ara = [];
        var ara1 = [];
        ara = trans(positions[index]);
        newarr = changecolumns(ara);
      }
    }
    else{
      newarr = positions[index];
    }
   //newarr = trans(positions[index]);

    counter++;
    return newarr;
  }
  document.addEventListener('keypress', function(e){
    if(keychangable){
      if (event.keyCode === 32){
        pos = getrotatedpos(rand, counter);
        keychangable = false;
      }
    }
})
document.addEventListener('keydown', function(e){
  if(e.keyCode === 39){
    console.log("aaaaa");
      x = x + res;
  }else if(e.keyCode === 37){
      x = x - res;
  }
});
  function trans(arr){
    var newarr1 = [];
    var newarray = [];
    for(var k = 0; k < arr.length; k++){
      newarr1[k] = arr[k].slice();
    }
    newarray = newarr1[0].map((col, i) => newarr1.map(row => row[i]));
    console.log(arr);
    console.log(newarray)
    return newarray;
}
function changerows(arr1){
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
function changecolumns(arr1){
  var newarr = [];
  for(var k = 0; k < arr1.length; k++){
    newarr[k] = arr1[k].slice();
  }
  for(var i = 0; i <  newarr[0].length; i++){//x
    //console.log(na[0].length);
      var temp;
      temp = newarr[i][0];
      newarr[i][0] = newarr[i][2];
      newarr[i][2] = temp;
  }
  return newarr;
}
  function update(){
    //var rand = Math.floor((Math.random() * 4) );
    gravity = gravity + res;
    ctx.fillStyle="#444";
    ctx.fillRect(0, 0, c.width, c.height);
    for(var k = 0; k < res; k ++){
      for(var n = 0; n < res; n++){
        ctx.strokeStyle="blue";
        ctx.strokeRect((k * res), (n * res), res, res);
      }
    }
    for(var i = 0; i <  pos.length; i++){//x 2
      for(var j = 0; j < pos[i].length; j++){//y 3
        if(pos[i][j] === 1 ){
          ctx.fillStyle = "black";
          ctx.strokeStyle="red";
          //console.log( j *res);
          ctx.fillRect((j * res) + x, (i * res) + gravity, res, res);
          ctx.strokeRect((j * res) + x, (i * res) + gravity, res, res);
        }
      }
    }
    console.log(counter);
    keychangable = true;
  }
    setInterval(update, 1000);
})
