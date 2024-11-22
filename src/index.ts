//create the enum product  : 
enum CategoryProduct {
    FOOD = "FOOD",
    ELECTRONICS = "ELECTRONICS",
    CLOTHING = "CLOTHING"
    
}


// create the interface product :
interface IProduct {
    id: number;
    name: string;
    price: number;
    category: CategoryProduct;
}


class Product implements IProduct {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public category: CategoryProduct
    ) {}
}

class FoodProduct extends Product {
    constructor(
        id: number,
        name: string,
        price: number,
        public expirationDate: Date
    ) {
        super(id, name, price, CategoryProduct.FOOD);
    }
}
class ProductManager<T extends Product> {
    private products: T[] = [];

    addProduct(product: T): void {
        try {
            if (this.products.find(p => p.id === product.id)) {
                throw new Error(`Product with ID ${product.id} already exists`);
            }
            this.products.push(product);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(`Error adding product: ${error.message}`);
            }
        }
    }


    getProduct(id: number): T | undefined {
        try {
            const product = this.products.find(p => p.id === id);
            if (!product) {
                throw new Error(`Product with ID ${id} not found`);
            }
            return product;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(`Error retrieving product: ${error.message}`);
            }
            return undefined;
        }
    }

    getAllProducts(): T[] {
        return this.products;
    }

    removeProduct(id: number): void {
        try {
            const index = this.products.findIndex(p => p.id === id);
            if (index === -1) {
                throw new Error(`Product with ID ${id} not found`);
            }
            this.products.splice(index, 1);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(`Error removing product: ${error.message}`);
            }
        }
    }
}

const productManager = new ProductManager<Product>();

try {

    // implementation : 
    const laptop = new Product(1, "Laptop", 3199.97, CategoryProduct.ELECTRONICS);
    const tShirt = new Product(2, "T-Shirt", 63.97, CategoryProduct.CLOTHING);
    const apple = new FoodProduct(3, "Apple", 3.17, new Date("2024-01-01"));
    const microsoft = new Product(4, "Microsoft", 3199.97, CategoryProduct.ELECTRONICS);
    const orange = new FoodProduct(5, "Orange", 3.17, new Date("2024-01-01"));
    const strawberry = new Product(6, "Strawberry", 3.17, CategoryProduct.FOOD);
    const blackberry = new Product(7, "Blackberry", 3.17, CategoryProduct.FOOD);
    const raspberry = new Product(8, "Raspberry", 3.17, CategoryProduct.FOOD);
    const smartphone = new Product(9, "Smartphone", 2239.97, CategoryProduct.ELECTRONICS);
    const jeans = new Product(10, "Jeans", 159.97, CategoryProduct.CLOTHING);
    const banana = new FoodProduct(11, "Banana", 2.53, new Date("2024-01-05")); 
    const tablet = new Product(12, "Tablet", 1279.97, CategoryProduct.ELECTRONICS);
    const dress = new Product(13, "Summer Dress", 255.97, CategoryProduct.CLOTHING);
    const mango = new FoodProduct(14, "Mango", 6.37, new Date("2024-01-03"));
    const smartwatch = new Product(15, "Smartwatch", 639.97, CategoryProduct.ELECTRONICS);
    const hoodie = new Product(16, "Hoodie", 127.97, CategoryProduct.CLOTHING);
    const headphones = new Product(17, "Wireless Headphones", 299.99, CategoryProduct.ELECTRONICS);
    const sneakers = new Product(18, "Running Sneakers", 189.99, CategoryProduct.CLOTHING);
    const pineapple = new FoodProduct(19, "Pineapple", 4.99, new Date("2024-01-07"));
    const camera = new Product(20, "Digital Camera", 899.99, CategoryProduct.ELECTRONICS);
    const sweater = new Product(21, "Wool Sweater", 149.99, CategoryProduct.CLOTHING);
    const grapes = new FoodProduct(22, "Grapes", 5.99, new Date("2024-01-04"));
    const keyboard = new Product(23, "Mechanical Keyboard", 159.99, CategoryProduct.ELECTRONICS);
    const jacket = new Product(24, "Winter Jacket", 299.99, CategoryProduct.CLOTHING);
    const watermelon = new FoodProduct(25, "Watermelon", 8.99, new Date("2024-01-02"));
    
   // calls of the methods :
   
    productManager.addProduct(laptop);
    productManager.addProduct(tShirt);
    productManager.addProduct(apple);
    productManager.addProduct(microsoft);
    productManager.addProduct(orange);
    productManager.addProduct(strawberry);
    productManager.addProduct(blackberry);
    productManager.addProduct(raspberry);
    productManager.addProduct(smartphone);
    productManager.addProduct(jeans);
    productManager.addProduct(banana);
    productManager.addProduct(tablet);
    productManager.addProduct(dress);
    productManager.addProduct(mango);
    productManager.addProduct(smartwatch);
    productManager.addProduct(hoodie);
    productManager.addProduct(headphones);
    productManager.addProduct(sneakers);
    productManager.addProduct(pineapple);
    productManager.addProduct(camera);
    productManager.addProduct(sweater);
    productManager.addProduct(grapes);
    productManager.addProduct(keyboard);
    productManager.addProduct(jacket);
    productManager.addProduct(watermelon);



    console.log("All products:", productManager.getAllProducts());

    const foundProduct = productManager.getProduct(1);
    console.log("Found product:", foundProduct);

    productManager.removeProduct(2);
    console.log("Products after removal:", productManager.getAllProducts());

} catch (error: unknown) {
    if (error instanceof Error) {
        console.error("An error occurred:", error.message);
    }
}
