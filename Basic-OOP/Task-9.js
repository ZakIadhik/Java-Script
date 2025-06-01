const priceCalculator = {
    taxRates: {
        standard: 18,
        food: 0,
        luxury: 25
    },

    discountCodes: {
        "STUDENT": 10,
        "VIP": 15,
        "FIRST": 20
    },

    deliveryPrices: {
        "Baku": 5,
        "other_city": 10,
        "village": 15
    },

    calculateProductPrice(basePrice, category) {
        const taxRate = this.taxRates[category] ?? this.taxRates.standard
        return basePrice + (basePrice * taxRate / 100)
    },

    applyDiscount(price, discountCode) {
        const discount = this.discountCodes[discountCode] ?? 0
        return price - (price * discount / 100)
    },

    calculateDelivery(location, orderValue) {
        const deliveryCost = this.deliveryPrices[location] ?? this.deliveryPrices.other_city
        return orderValue >= 200 ? 0 : deliveryCost
    },

    calculateTotal(productsList, discountCode, deliveryAddress) {
        let total = 0;

        for (const product of productsList) {
            const priceWithTax = this.calculateProductPrice(product.price, product.category)
            total += priceWithTax
        }

        const discountedTotal = this.applyDiscount(total, discountCode)
        const deliveryCost = this.calculateDelivery(deliveryAddress, discountedTotal)

        return {
            productsTotal: total.toFixed(2),
            discountedTotal: discountedTotal.toFixed(2),
            delivery: deliveryCost.toFixed(2),
            finalTotal: (discountedTotal + deliveryCost).toFixed(2)
        }
    },

    createInvoice(customerInfo, orderDetails) {
        const summary = this.calculateTotal(
            orderDetails.products,
            orderDetails.discountCode,
            orderDetails.deliveryAddress
        )

        return {
            customer: customerInfo,
            orderDetails: orderDetails,
            summary: summary,
            invoiceDate: new Date().toLocaleString()
        }
    }
}

const customer = {
    name: "Leyla Hasanli",
    email: "leyla@example.com"
};

const order = {
    products: [
        { name: "Chocolate", price: 20, category: "food" },
        { name: "Perfume", price: 100, category: "luxury" }
    ],
    discountCode: "VIP",
    deliveryAddress: "village"
};

const invoice = priceCalculator.createInvoice(customer, order);

console.log(JSON.stringify(invoice, null, 2))


