//console.log("hii");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let customer = document.getElementById("customer-table");

    let body = "";

    data.forEach(element => {
        body += `
        <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.userId}</td>
            <td>${element.completed }</td>
        </tr>
        `;
        
    });
    customer.innerHTML = body;
  });