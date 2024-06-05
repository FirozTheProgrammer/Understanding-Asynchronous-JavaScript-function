// ===> call back function syntax <====

// this function can displyed value of another function
const disply = (result) => {
  console.log(result);
};

// calculate values function
const calculator = (num1, num2, callback) => {
  let sum = num1 + num2;

  // if have call back function then it will be run otherwise not
  if (callback) callback(sum);
};

calculator(5, 5, disply);

// another call back function
function fetchData(callback) {
  setTimeout(() => {
    const data = "Some data";
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log(data); // Outputs "Some data" after 1 second
});

// different way to call back function

const calculator2 = (num1, num2, callback) => {
  let sum = num1 + num2;

  // if have call back function then it will be run otherwise not
  if (callback) callback(sum);
};

calculator2(5, 5, (result) => {
  console.log(result);
});
