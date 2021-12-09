const add = (a, b, c, d, e) => {
    return a + b + c + d + e;
}
let arr = [1, 2, 3, 4, 5];
console.log(add(...arr));

console.log("--------------");
const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];
console.log(firstArr.concat(secondArr));
console.log([...firstArr, ...secondArr]);
console.log([...firstArr, 'a', ...secondArr]);

console.log("--------------");
const clone = [...firstArr];
console.log(firstArr);
console.log(clone);

console.log("--------------");
const firstObj = { name: "Saleh" };
const secondObj = { institute: "IIEE" };
const combinedObj = {...firstObj, ...secondObj, location: "Pakistan" };
console.log(combinedObj);