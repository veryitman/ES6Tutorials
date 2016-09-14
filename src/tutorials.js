function zx()
{
    console.log(a);
    var a = 0;
}

zx();

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
