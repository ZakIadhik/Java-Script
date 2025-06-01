const products = [
    { name: "Laptop", price: 1200, category: "electronics", inStock: true },
    { name: "Phone", price: 800, category: "electronics", inStock: false },
    { name: "Table", price: 300, category: "furniture", inStock: true },
    { name: "Book", price: 25, category: "education", inStock: true },
    { name: "Computer", price: 1500, category: "electronics", inStock: true }
];


function narikStock(products) {
    const res = products.filter(product => product.inStock)
    return res;

}

const res = narikStock(products);
console.log(res);



