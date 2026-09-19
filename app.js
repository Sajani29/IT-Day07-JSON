console.log("hii");

fetch("/Customers.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });