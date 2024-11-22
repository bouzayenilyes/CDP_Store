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
    productManager.addProduct(strawberry) ; 
    productManager.addProduct(blackberry);
    productManager.addProduct(raspberry);



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
