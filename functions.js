function addition(a, b) {
    return a + b;
}
console.log(addition(25, 50));


function addition(a, b) {
    return a + b;
}
console.log(addition(25, 50));

function subtraction(c, d) {
    return c - d;
}
console.log(subtraction(100, 30))

function thirdvalue(a) {
    return a / 3;
}
console.log(thirdvalue(12))

function swap(a, b) {
    return b = a;
}
console.log(swap(50, 60))

function addfour(a, b, c, d) {

    return a = b, c = d;
}
console.log(addfour(45, 55, 65, 75));

// internet programs exercise ##########


function reversenumber(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(Number(reversenumber(897897)));

function uppercase(str) {
    let array1 = str.split(' ');
    let newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
}
console.log(uppercase("i love you"));

function Second_Greatest_Lowest(arr_num) {
    arr_num.sort(function (x, y) {
        return x - y;
    });
    var uniqa = [arr_num[0]];
    var result = [];

    for (var j = 1; j < arr_num.length; j++) {
        if (arr_num[j - 1] !== arr_num[j]) {
            uniqa.push(arr_num[j]);
        }
    }
    result.push(uniqa[1], uniqa[uniqa.length - 2]);
    return result.join(',');
}

console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5]));
