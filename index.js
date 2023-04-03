class ProductManager {
    constructor(products){
        this.products = [];
    }

    addProduct(product){
        if (this.products.length === 0) {
            product.id = 1;
        } else {
            const lastProduct = this.products[this.products.length - 1];
            product.id = lastProduct.id + 1; 
        }
        if (this.products.find(producto => producto.code == product.code)) {
            return "El producto ya existe";
        }else {
            this.products.push(product);
        }
       
    };

    getProducts(){
        return this.products;
    };

    getProductById(id){
        const productId = this.products.find(producto => producto.id == id)
    
        if (!productId) {
            console.log("Not Found");
        }else {
            return `El producto con ID: ${id} es: ${productId}`;
        }
    }
}

class Product {
    constructor(title = "", description = "", price = 0, thumbnail = "", code = "", stock = 0){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

const product1 = new Product("Avengers", "Remera: 100% Poliestes", "$2000", "./assets/img/avengers-min.jpg", "001", "5");
const product2 = new Product("Bender", "Remera: 100% Poliestes", "$2000", "./assets/img/bender-min.jpg", "002", "7");
const product3 = new Product("Big Heroes", "Remera: 100% Poliestes", "$2000", "./assets/img/bigheroes-min.jpg", "003", "9");
const product4 = new Product("Toxic Dog", "Remera: 100% Poliestes", "$2000", "./assets/img/cabeza-min.jpg", "004", "10");
const product5 = new Product("Satanic Goat", "Remera: 100% Poliestes", "$2000", "./assets/img/cabraSatanica-min.jpg", "005", "11");

const productManager = new ProductManager();

productManager.addProduct(product1);
productManager.addProduct(product2);
productManager.addProduct(product3);
productManager.addProduct(product4);
productManager.addProduct(product5);

productManager.getProducts();
productManager.getProductById(4);

console.log(productManager.getProducts());




