//-------------------------------------------
//该实例可以了解
//1.字符串的split方法
//2.数组的map方法
//3.数组的join方法
//4.新语法 => 使用
//-------------------------------------------

var originalStr = "mark is here!";
console.log("Original String: " + originalStr);

//1.split 字符串
var splitArray = originalStr.split(' ');
console.log("Splited the original String with space: " + splitArray);

//2.map 处理
//这里使用了 =>(新语法) 注意在其内部一定要返回值(return)
let index = 0;
var mapArray = splitArray.map((word) => { 
    console.log("array[" + index + "] = " +word);
    index ++;

    return word;
});

/*
// 传统做法
var mapArray = splitArray.map(function(word) {
    console.log("legacy word..." + word);
});
*/
console.log("Mapped Array: " + mapArray);


//3.join 默认使用逗号作为分隔符连接数组元素
var joinStr = mapArray.join(' ');
console.log("Join the mapped array to String: " + joinStr);
