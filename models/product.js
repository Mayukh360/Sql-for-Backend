const db = require("../util/database");

const Cart = require("./cart");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  //This is For inserting Data
  save() {
    return db.execute(
      " INSERT INTO products (title,price,imageUrl,description) VALUES(?,?,?,?)",
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static deleteById(id) {}

  //This is for fetching Data
  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  // "?" used for taking user input, where in the [] array which input would be taken that will mentioned
  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id= ?', [id]);
  }
};
