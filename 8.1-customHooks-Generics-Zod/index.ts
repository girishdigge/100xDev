type NumberArr = (number | string)[];
const firstElement = (arr: NumberArr): number | string => {
  return arr[0];
};

const ele = firstElement([131, 2, 3]);
const ele1 = firstElement(['ad13', '2', 'a3']);
console.log(ele);
console.log(ele1);
