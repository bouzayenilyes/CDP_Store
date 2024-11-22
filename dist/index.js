"use strict";
//create the enum product  : 
var CategoryProduct;
(function (CategoryProduct) {
    CategoryProduct["FOOD"] = "FOOD";
    CategoryProduct["ELECTRONICS"] = "ELECTRONICS";
    CategoryProduct["CLOTHING"] = "CLOTHING";
})(CategoryProduct || (CategoryProduct = {}));
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
class FoodProduct extends Product {
    constructor(id, name, price, expirationDate) {
        super(id, name, price, CategoryProduct.FOOD);
        this.expirationDate = expirationDate;
    }
}
class ProductManager {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        try {
            if (this.products.find(p => p.id === product.id)) {
                throw new Error(`Product with ID ${product.id} already exists`);
            }
            this.products.push(product);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(`Error adding product: ${error.message}`);
            }
        }
    }
    getProduct(id) {
        try {
            const product = this.products.find(p => p.id === id);
            if (!product) {
                throw new Error(`Product with ID ${id} not found`);
            }
            return product;
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(`Error retrieving product: ${error.message}`);
            }
            return undefined;
        }
    }
    getAllProducts() {
        return this.products;
    }
    removeProduct(id) {
        try {
            const index = this.products.findIndex(p => p.id === id);
            if (index === -1) {
                throw new Error(`Product with ID ${id} not found`);
            }
            this.products.splice(index, 1);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(`Error removing product: ${error.message}`);
            }
        }
    }
}
const productManager = new ProductManager();
try {
    // implementation : 
    const laptop = new Product(1, "Laptop", 999.99, CategoryProduct.ELECTRONICS);
    const tShirt = new Product(2, "T-Shirt", 19.99, CategoryProduct.CLOTHING);
    const apple = new FoodProduct(3, "Apple", 0.99, new Date("2024-01-01"));
    const microsoft = new Product(4, "Microsoft", 999.99, CategoryProduct.ELECTRONICS);
    const orange = new FoodProduct(5, "Orange", 0.99, new Date("2024-01-01"));
    const strawberry = new Product(6, "Strawberry", 0.99, CategoryProduct.FOOD);
    const blackberry = new Product(7, "Blackberry", 0.99, CategoryProduct.FOOD);
    const raspberry = new Product(8, "Raspberry", 0.99, CategoryProduct.FOOD);
    // calls of the methods :
    productManager.addProduct(laptop);
    productManager.addProduct(tShirt);
    productManager.addProduct(apple);
    productManager.addProduct(microsoft);
    productManager.addProduct(orange);
    productManager.addProduct(strawberry);
    productManager.addProduct(blackberry);
    productManager.addProduct(raspberry);
    console.log("All products:", productManager.getAllProducts());
    const foundProduct = productManager.getProduct(1);
    console.log("Found product:", foundProduct);
    productManager.removeProduct(2);
    console.log("Products after removal:", productManager.getAllProducts());
}
catch (error) {
    if (error instanceof Error) {
        console.error("An error occurred:", error.message);
    }
}
