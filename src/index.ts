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
    imageUrl: string;
 
}

class Product implements IProduct {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public category: CategoryProduct,
        public imageUrl: string = "/images/default-product.jpg"
    ) {}
}

class FoodProduct extends Product {
    constructor(
        id: number,
        name: string,
        price: number,
        public expirationDate: Date,
        imageUrl: string = "/images/default-food.jpg"
    ) {
        super(id, name, price, CategoryProduct.FOOD, imageUrl);
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

   removeP(id: number): void {
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

    // implementation : lel les produits oo nzid les images using the Unsplash links library
    const laptop = new Product(1, "Laptop", 3199.97, CategoryProduct.ELECTRONICS, "https://images.unsplash.com/photo-1496181133206-80ce9b88a853");
    const tShirt = new Product(2, "T-Shirt", 63.97, CategoryProduct.CLOTHING, "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab");
    const apple = new FoodProduct(3, "Apple", 3.17, new Date("2024-01-01"), "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb");
    const microsoft = new Product(4, "Microsoft", 3199.97, CategoryProduct.ELECTRONICS, "https://images.unsplash.com/photo-1633419461186-7d40a38105ec");
    const orange = new FoodProduct(5, "Orange", 3.17, new Date("2024-01-01"), "https://images.unsplash.com/photo-1557800636-894a64c1696f");
    const strawberry = new Product(6, "Strawberry", 3.17, CategoryProduct.FOOD, "https://images.unsplash.com/photo-1464965911861-746a04b4bca6");
    const blackberry = new Product(7, "Blackberry", 3.17, CategoryProduct.FOOD, "https://images.unsplash.com/photo-1615485290382-441e4d049cb5");
    const raspberry = new Product(8, "Raspberry", 3.17, CategoryProduct.FOOD, "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5");
    const smartphone = new Product(9, "Smartphone", 2239.97, CategoryProduct.ELECTRONICS, "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9");
    const jeans = new Product(10, "Jeans", 159.97, CategoryProduct.CLOTHING, "https://images.unsplash.com/photo-1542272604-787c3835535d");
    const banana = new FoodProduct(11, "Banana", 2.53, new Date("2024-01-05"), "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e");
    const tablet = new Product(12, "Tablet", 1279.97, CategoryProduct.ELECTRONICS, "https://images.unsplash.com/photo-1561154464-82e9adf32764");
    const dress = new Product(13, "Summer Dress", 255.97, CategoryProduct.CLOTHING, "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1");
    const mango = new FoodProduct(14, "Mango", 6.37, new Date("2024-01-03"), "https://images.unsplash.com/photo-1553279768-865429fa0078");
    const smartwatch = new Product(15, "Smartwatch", 639.97, CategoryProduct.ELECTRONICS, "https://images.unsplash.com/photo-1544117519-31a4b719223d");
    const hoodie = new Product(16, "Hoodie", 127.97, CategoryProduct.CLOTHING, "https://images.unsplash.com/photo-1556821840-3a63f95609a7");
    const headphones = new Product(17, "Wireless Headphones", 299.99, CategoryProduct.ELECTRONICS, "https://images.unsplash.com/photo-1505740420928-5e560c06d30e");
    const sneakers = new Product(18, "Running Sneakers", 189.99, CategoryProduct.CLOTHING, "https://images.unsplash.com/photo-1542291026-7eec264c27ff");
    const pineapple = new FoodProduct(19, "Pineapple", 4.99, new Date("2024-01-07"), "https://images.unsplash.com/photo-1550258987-190a2d41a8ba");
    const camera = new Product(20, "Digital Camera", 899.99, CategoryProduct.ELECTRONICS, "https://images.unsplash.com/photo-1516035069371-29a1b244cc32");
    const sweater = new Product(21, "Wool Sweater", 149.99, CategoryProduct.CLOTHING, "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633");
    const grapes = new FoodProduct(22, "Grapes", 5.99, new Date("2024-01-04"), "https://images.unsplash.com/photo-1537640538966-79f369143f8f");
    const keyboard = new Product(23, "Mechanical Keyboard", 159.99, CategoryProduct.ELECTRONICS, "https://images.unsplash.com/photo-1587829741301-dc798b83add3");
    const jacket = new Product(24, "Winter Jacket", 299.99, CategoryProduct.CLOTHING, "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3");
    const watermelon = new FoodProduct(25, "Watermelon", 8.99, new Date("2024-01-02"), "https://images.unsplash.com/photo-1587049352846-4a222e784d38");
    const houses = new Product(18, "houses", 200000, CategoryProduct.CLOTHING,"https://unsplash.com/fr/photos/rendu-3d-de-lexterieur-dun-batiment-moderne-2MA8dFvOMec");
    
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

    productManager.removeP(2);
    console.log("Products after removal:", productManager.getAllProducts());

} catch (error: unknown) {
    if (error instanceof Error) {
        console.error("An error occurred:", error.message);
    }
}
