async function showProducts() {
    const products = await getProducts();
    console.log(products);

    const listOfProducts = document.querySelector(".listOfProducts");
    listOfProducts.innerHTML = products.map(product => {
        return `
        <article>
            <img class="w-full"
                src="${product.imageUrl}"
                alt="">
            <p class="text-gray-700 text-lg my-2 font-bold">${product.brand} ${product.model}</p>
            <p class="text-red-700">${product.price} $</p>
            <p class="text-yellow-500 my-2">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
            </p>
            <button class="bg-black text-white p-2 rounded-xl w-full mb-2">Add to card</button>
        </article>
        `;
    }).join("");
}

async function getProducts() {
    const response = await fetch(
        'http://195.26.245.5:9505/api/products'
    );
    const data = await response.json();
    return data;
}

showProducts();

async function showCategories() {
  const response = await fetch(
    'http://195.26.245.5:9505/api/categories'
  );

  const categoriesData = await response.json();

  const categoriesList = document.querySelector(".categoriesList");
  categoriesList.innerHTML = categoriesData
    .map(item => `<li>${item.name}</li>`)
    .join("");
}

showCategories();



