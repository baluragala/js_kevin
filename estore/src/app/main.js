import { ProductService } from "./product.service.js";
import $ from "jquery";

// const service = new ProductService();
// service.getProducts().then(products => console.log(products));
const service = new ProductService();
$(function() {
  //onready
  const container = $("#root");
  const header = getHeader();
  container.append(header);
  container.append("<button>Add Product</button>");
  container.append(getAddProductForm());
  $("form").submit(function(e) {
    e.preventDefault();
    e.stopPropagation();
    let name = $("#pname").val();
    let price = $("#pprice").val();
    let stock = $("#pstock").val();
    service
      .saveProduct({ name, price, stock })
      .then(p => {
        $("#pname").val("");
        $("#pprice").val("");
        $("#pstock").val("");
        alert("product added successfully");
        console.log(p.data);
        $("table").append(getProductRow(p.data));
      })
      .catch(e => alert("unable to save product. please try again"));
  });
  $("button").click(function() {
    $("#product-form").toggle(500);
  });
  service.getProducts().then(products => {
    const table = getProductTable(products);
    container.append(table);
    $("[id^='delete']").click(function(e) {
      console.log(e);
      let r = confirm(`Are you sure to delete product #${e.target.dataset.id}`);
      if (r) {
        service.deleteProduct(e.target.dataset.id).then(p => console.log(p));
      }
    });
    $("[id^='edit']").click(function(e) {
      let pid = e.target.dataset.id;
      $(this).text("SAVE");
      $.each(
        $(`#product_${pid}`)
          .contents()
          .filter("td"),
        function(i, e) {
          let value;
          switch (i) {
            case 1:
              value = $(e).text();
              $(e).html(`<input type='text' value='${value}'/>`);
              break;
            case 2:
            case 3:
              value = $(e).text();
              $(e).html(`<input type='number' value='${value}'/>`);
              break;
          }
        }
      );
    });
  });
});

function getAddProductForm() {
  return `
  <fieldset id="product-form" style="width:80%;margin:0 auto;padding:5px">
    <form>
      <legend>Add Product</legend>
      <input type="text" placeholder="product name" id="pname">
      <input type="number" placeholder="product price" id="pprice">
      <input type="number" placeholder="product stock" id="pstock">
      <input type="submit" value="Add">
    </form>
  </fieldset>
  `;
}

function getHeader() {
  return `
  <header>
    <h1 style="color:maroon;text-align:center">EStore</h1>
  </header>
  `;
}

function getProductTable(products) {
  let tableHeader = `
  <tr class="table-header">
    <td>Product ID</td>
    <td>Product Name</td>
    <td>Product Price</td>
    <td>Product Stock</td>
    <td>ACTIONS</td>
  </tr>
  `;
  let rows = products.map(
    p => `
  <tr class="table-row" id="product_${p.id}">
    <td>${p.id}</td>
    <td>${p.name}</td>
    <td>${p.price}</td>
    <td>${p.stock}</td>
    <td><button id="edit_${p.id}" data-id="${
      p.id
    }">EDIT</button>&nbsp;<button id="delete_${p.id}" data-id="${
      p.id
    }">DELETE</button></td>
  </tr>
  `
  );

  let rowsMerged = rows.join("");
  return `<table>${tableHeader}${rowsMerged}</table>`;
}

function getProductRow(p) {
  return `<tr class="table-row">
  <td>${p.id}</td>
  <td>${p.name}</td>
  <td>${p.price}</td>
  <td>${p.stock}</td>
  <td><button>EDIT</button>&nbsp;<button>DELETE</button></td>
</tr>`;
}
