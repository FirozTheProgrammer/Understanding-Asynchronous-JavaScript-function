function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Some data";
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))  // Outputs "Some data" after 1 second
  .catch(error => console.error(error));

