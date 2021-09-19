//Generics
const myArr = <T>(arr: Array<T>) => arr[arr.length - 1]
// console.log(myArr([1,2,'a',true,1]))

const makeArrXY = <X, Y>(x: X,y: Y) => [x,y]
// console.log(makeArrXY(2,3));
// console.log(makeArrXY('a','b'));
// console.log(makeArrXY(2,'a'));

const makeArrT = <X,Y>(x :X,y:Y):[X,Y] => [x,y];
// console.log(makeArrT(2,3))
// console.log(makeArrT('a','b'))
// console.log(makeArrT('a',2));

const makeArrDefault = <X, Y = number>(x: X, y: Y):[X,Y] => [x,y];
// console.log(makeArrDefault<number>(2,3));

const makeObj = <T extends {gender: boolean}>(employee: T) => {
    return {
        ...employee,
        uid: 1
    }
}
// const data = makeObj({name:'tyson',age:23,gender:true});
// console.log(data.gender);

interface Resource<T>{
    uid: number,
    name: String,
    data: T, 
}

const resource: Resource<object> = {
    uid: 1,
    name: 'Tyson',
    data: {fullName: 'Tyson Bui', age: 22}
}
// console.log(resource)
