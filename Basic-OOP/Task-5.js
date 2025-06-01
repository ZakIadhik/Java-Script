const shoppingCart = {
    products: [
        { name: "Apple iPhone", price: 1000, quantity: 1, taxPercent: 18 },
        { name: "Samsung TV", price: 800, quantity: 2, taxPercent: 18 },
        { name: "Book", price: 20, quantity: 3, taxPercent: 0 }
    ],

    calculateTotalPrice() {
        return this.products.reduce((total, product) =>
            total + product.price * product.quantity, 0)
    },

    calculateTax() {
        return this.products.reduce((total, product) =>
            total + (product.price * product.quantity * product.taxPercent / 100), 0)
    },

    totalPriceWithTax() {
        return this.calculateTotalPrice() + this.calculateTax()
    },

    addProduct(product) {
        const existingProduct = this.products.find(p => p.name === product.name)

        if (!existingProduct) {
            product.quantity = product.quantity || 1
            product.taxPercent = product.taxPercent || 0
            this.products.push(product)
        } else {
            existingProduct.quantity += 1
        }
    },

    removeProduct(productName) {
        const index = this.products.findIndex(p => p.name === productName)
        if (index !== -1) {
            this.products.splice(index, 1)
        }
    },

    clearCart() {
        this.products.length = 0
    }

}

shoppingCart.addProduct({ name: "Book", price: 500, taxPercent: 18 })
shoppingCart.addProduct({ name: "Book", price: 500 })

console.log("До удаления:")
console.log("Products:", shoppingCart.products)

shoppingCart.removeProduct("Samsung TV")
console.log("После удаления Samsung TV:")
console.log("Products:", shoppingCart.products)

shoppingCart.clearCart()
console.log("После очистки:")
console.log("Products:", shoppingCart.products)




