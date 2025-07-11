//conectamos websockets del lado del cliente
const socket = io();

const formNewProduct = document.getElementById("formNewProduct");

formNewProduct.addEventListener("submit", (event)=> {
  event.preventDefault();

  const formData = new FormData(formNewProduct);
  const productData = {};

  formData.forEach((value, key)=> {
    productData[key] = value;
  });

  //enviamos los datos del producto al servidor
  socket.emit("newProduct", productData);
})

socket.on("productAdded", (newProduct)=> {
  const productsList = document.getElementById("productsList");

  // productsList.innerHTML +=  `<div> ${newProduct.title} - ${newProduct.price} -${newProduct.stock} </div>`;

  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("product-image-container");

  const deleteButton = document.createElement("button");
  deleteButton.type = "submit";
  deleteButton.textContent = "Eliminar";
  // Podés agregar aquí un handler para eliminar el producto si lo necesitás

  const image = document.createElement("img");
  image.classList.add("product-image");
  image.src = newProduct.thumbnail || "";
  image.alt = "";

  imageContainer.appendChild(deleteButton);
  imageContainer.appendChild(image);

  const title = document.createElement("h2");
  title.classList.add("product-title");
  title.textContent = newProduct.title;

  const price = document.createElement("h3");
  price.classList.add("product-price");
  price.textContent = `Precio: ${newProduct.price}`;

  const stock = document.createElement("h3");
  stock.textContent = `Stock: ${newProduct.stock}`;

  productCard.appendChild(imageContainer);
  productCard.appendChild(title);
  productCard.appendChild(price);
  productCard.appendChild(stock);

  productsList.appendChild(productCard);
});

    
//

  function deleteProduct(productId) {
    if (confirm("¿Seguro que deseas eliminar este producto?")) {
      socket.emit("deleteProduct", productId);
    }
  }

  socket.on("productDelete", (updatedProductList) => {
    const productListContainer = document.getElementById("productsList");
    productListContainer.innerHTML = ""; // Limpiamos antes de volver a pintar

    updatedProductList.forEach(product => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.id = `product-${product.id}`;
      productCard.innerHTML = `
        <div class="product-image-container">
          <button onclick="deleteProduct(${product.id})">Eliminar</button>
          <img class="product-image" src="${product.thumbnail}" alt="">
        </div>
        <h2 class="product-title">${product.title}</h2>
        <h3 class="product-price">Precio: ${product.price}</h3>
        <h3> Stock: ${product.stock} </h3>
      `;
      productListContainer.appendChild(productCard);
    });
  });