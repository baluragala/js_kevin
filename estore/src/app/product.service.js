import axios from "axios";

class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

export class ProductService {
  products = new Map();

  saveProduct(product) {
    return axios.post("http://localhost:3000/products", product);
  }

  deleteProduct(id) {
    return axios.delete(`http://localhost:3000/products/${id}`);
  }

  async getProducts() {
    try {
      let products = await axios
        .get("http://localhost:3000/products")
        .then(res => res.data);
      return products;
    } catch (error) {
      console.log(error);
      alert("something went wrong");
      return null;
    }
  }
}

// return [
//   {
//     id: 1,
//     name: "Mac book pro",
//     price: 2000,
//     stock: 20
//   },
//   {
//     id: 2,
//     name: "Dell XPS",
//     price: 1000,
//     stock: 10
//   },
//   {
//     id: 3,
//     name: "Dell Alienware",
//     price: 1500,
//     stock: 30
//   }
// ];
