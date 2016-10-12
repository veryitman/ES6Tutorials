//-------------------------------------
// 函数作为数组的元素
//-------------------------------------

var arrayFun = [function (x) { return x*x }, 20];
console.log(arrayFun[0]);//[Function]
console.log(arrayFun[1]);//20

//arrayFun[0] 取出来是函数本身
//arrayFun[1]取出来作为函数的参数
console.log('arrayFun[0]arrayFun[1] = ' + arrayFun[0](arrayFun[1]));//400


//-------------------------------------
// 函数
//-------------------------------------


//ES6可以使用“箭头”（=>）定义函数，注意是函数，不要使用这种方式定义类（构造器）。


//1. 具有一个参数的简单函数
var single = a => a
//var single = (a) => a//等效
console.log(single('hello, world')) // 'hello, world'


//2. 没有参数的需要用在箭头前加上小括号
var log = () => {
    alert('no param')
}


//3. 多个参数需要用到小括号，参数间逗号间隔，例如两个数字相加
var add = (a, b) => a + b
console.log(add(3, 8)) // 11


//4. 函数体多条语句需要用到大括号
var add = (a, b) => {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b
    }
    else {
        return 0
    }
}
console.log(add(1, 0));


//5. 返回对象时需要用小括号包起来，因为大括号被占用解释为代码块了
var getHash = arr => {
    // ...
    return ({
        name: 'Jack',
        age: 33
    })
}


//6. 直接作为事件handler
//document.addEventListener('click', ev => {
    //console.log(ev)
//})


//7. 作为数组排序回调
var arr = [1, 9 , 2, 4, 3, 8].sort((a, b) => {
    if (a - b > 0 ) {
        return 1
    } 
    else {
        return -1
    }
})
console.log(arr) // [1, 2, 3, 4, 8, 9]

// 注意

//1. typeof运算符和普通的function一样
var func = a => a
console.log(typeof func); // "function"
　　

//2. instanceof也返回true，表明也是Function的实例
console.log(func instanceof Function); // true

//3. this固定，不再善变
const obj = {
    data: ['John Backus', 'John Hopcroft'],
    init: function() {
        //document.onclick = ev => {
            //alert(this.data) // ['John Backus', 'John Hopcroft']
        //}
        
        // 非箭头函数
        // document.onclick = function(ev) {
        //     alert(this.data) // undefined
        // }
    }
}
obj.init()
//这个很有用，再不用写me，self，_this了，或者bind。
//

//4. 箭头函数不能用new
var Person = (name, age) => {
    this.name = name
    this.age = age
}
//var p = new Func('John', 33) // error
　　

//5. 不能使用argument
var func = () => {
    console.log(arguments)
}
//func(55) //
　　

//对于5，在Firefox36里测试是可以输出55的，貌似并没有这个限制
//


// 给函数增加属性
storer.keyv = 9000;

function storer() {
    return storer.keyv;
}

console.log(storer.keyv);
console.log(storer());

/* 这种方式定义的函数对象, 需要将其属性放在声明之后. */
var storer2 = () => {
    return storer2.keyv;
};

storer2.keyv = 1919191;

console.log(storer2());
