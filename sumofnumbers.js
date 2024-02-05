const nums = [1, 2, 3, 4];

function sumFor(data) {
  let sum = 0;
  for (const num of data) {
    sum += num;
  }
  return sum;
}

console.log(sumFor(nums));

const sumWhile = (data) => {
  let sum = 0;
  let i = 0;

  while (i < data.length) {
    sum += data[i];
    i++;
  }
  return sum;
};

console.log(sumWhile(nums));

function sumRecursion(data) {
  if (data.length === 0) {
    return 0;
  }
  return data[0] + sumRecursion(data.slice(1, data.length));
}

console.log(sumRecursion(nums));

const sumTheSimpleWay = (data) => _.reduce(data, function (memo, num) { return memo + num; }, 0);

console.log(sumTheSimpleWay(nums));
