var numbers = [1, 2, 3, 4, 5, 6, 8];
numbers.filter(function(n) {
  return n % 2 == 0;
});

function concat(arr1, arr2) {
  var arr3 = [];
  for (var i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
  }
  for (var i = 0; i < arr2.length; i++) {
    arr3.push(arr2[i]);
  }
  return arr3;
}

function jsonToTable(json) {
  let table = document.createElement("table");
  document.body.appendChild(table);
  let headerRow = table.insertRow(0);
  let colCount = 0;
  for (let p in json) {
    let c1 = headerRow.insertCell(colCount);
    c1.innerText = p;
  }
}
