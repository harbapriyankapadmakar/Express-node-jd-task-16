const dB=require('../util/database');
const Cart = require('./cart');



module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {

     return dB.execute('INSERT INTO products (title,price,description,imageUrl) VALUES(?,?,?,?)',
    [this.title,this.price,this.description,this.imageUrl]);

  }

  static deleteById(id) {
    return dB.execute('DELETE FROM products WHERE id = ?', [id])

  }

  static fetchAll() {

    return dB.execute('SELECT * FROM products')

  }

  static findById(id, cb) {

    return dB.execute('SELECT * FROM products WHERE id = ?', [id]);
 }
}