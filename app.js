//console.log("hii");

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then((data) => {
        console.log(data);

        let productsContainer = document.getElementById("product-container");

        let body = "";
        data.forEach((product) => {
            body += `
            <div class="col">
            <div class="card shadow-sm">
              <img src="${product.image}" class="card-img-top" alt="..." />
              <h1 class="card-title">${product.title}</h1>
              <div class="card-body">
                <p class="card-text">
                  ${product.description}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary bg-success text-black"
                    >
                      Price: $${product.price}
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary bg-info text-black"
                    >
                        Add to Cart
                    </button>
                  </div>
                  <small class="text-body-secondary">View Details</small>
                </div>
              </div>
            </div>
          </div>
            `;
        });

        productsContainer.innerHTML = body;

    })