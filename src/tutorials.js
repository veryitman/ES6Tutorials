
//-------------------------------
// let
//-------------------------------

var a = [];
for (var i = 0; i < 10; i++) {
  var c = i;
  a[i] = function () {
    console.log(c);
  };
}
a[6](); // 9

var b = [];
for (var i=0; i<10; i++) {
    let c = i;
    b[i] = function() {
        console.log(c)
    };
}

b[6]();

//----------------------------------
// forEach
//----------------------------------
var sum = 0;
var arraySum = [1, 2, 3, 4, 5];
//x 数组对应的索引值
arraySum.forEach(function(x) {
    sum +=x;
});
console.log(sum);

//v 数组的对应索引值
//i 数组索引
//a 数组
arraySum.forEach(function(v, i, a) {
    a[i] = v+1;
});
console.log(arraySum);
