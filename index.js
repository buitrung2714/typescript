var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Generics
var myArr = function (arr) { return arr[arr.length - 1]; };
// console.log(myArr([1,2,'a',true,1]))
var makeArrXY = function (x, y) { return [x, y]; };
// console.log(makeArrXY(2,3));
// console.log(makeArrXY('a','b'));
// console.log(makeArrXY(2,'a'));
var makeArrT = function (x, y) { return [x, y]; };
// console.log(makeArrT(2,3))
// console.log(makeArrT('a','b'))
// console.log(makeArrT('a',2));
var makeArrDefault = function (x, y) { return [x, y]; };
// console.log(makeArrDefault<number>(2,3));
var makeObj = function (employee) {
    return __assign(__assign({}, employee), { uid: 1 });
};
var resource = {
    uid: 1,
    name: 'Tyson',
    data: { fullName: 'Tyson Bui', age: 22 }
};
// console.log(resource)
