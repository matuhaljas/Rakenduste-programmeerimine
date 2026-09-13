const products = [
    {name: "Laptop", price: 900, inStock: true},
    {name: "Mouse", price: 50, inStock: false},
    {name: "Headphones", price: 80, inStock: true}
]

const productNames = products.map((p) => p.name);
console.log(productNames);

const cheapProduct = products.filter((p) => p.price < 100 && p.inStock === true);
console.log(cheapProduct);