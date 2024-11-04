let table_values = document.querySelectorAll("input");
const CONTENT_TABLE = document.querySelector("tbody");
const SUBTOTAL_TABLE = document.querySelector("#subtotal");
const RATE_TABLE = document.querySelector("#rate");
const TAX_TABLE = document.querySelector("#taxes");
const TOTAL_TABLE = document.querySelector("#total");

let total = 0;
let tax = 0.5;
let rate = 0;
let subtotal = 0;

window.onload = function () {
  SUBTOTAL_TABLE.innerHTML = changePrice(0);
  RATE_TABLE.innerHTML = changePercentage(5);
  TAX_TABLE.innerHTML = changePrice(0);
  TOTAL_TABLE.innerHTML = changePrice(0);
};

function priceDecimals(number) {
  return Number.parseFloat(number).toFixed(2) + "&euro;";
}

function changePrice(number) {
  return priceDecimals(number);
}

function changePercentage(number) {
  return number + "%";
}

function insertElements() {
  let row = document.createElement("tr");
  for (let i = 0; i < 3; i++) {
    let column = document.createElement("td");
    column.textContent = table_values[i].value;
    row.appendChild(column);
  }
  totalPrice(row);
  deleteRow(row);
  CONTENT_TABLE.appendChild(row);
  updatePrice();
}

function totalPrice(row) {
  let totalArticle = table_values[1].value * table_values[2].value;
  row.appendChild(createColumn(priceDecimals(totalArticle)));
  subtotal += totalArticle;
}

function deleteRow(row) {
  row.appendChild(createColumn("X"));
  row.lastChild.addEventListener("click", deleteContent);
}

function createColumn(content) {
  let column = document.createElement("td");
  column.innerHTML = content;
  return column;
}

function updatePrice() {
  SUBTOTAL_TABLE.innerHTML = changePrice(subtotal);

  tax = rate * subtotal;
  TAX_TABLE.innerHTML = changePrice(tax);

  total = tax + subtotal;
  TOTAL_TABLE.innerHTML = changePrice(total);
}

function deleteContent() {
  CONTENT_TABLE.removeChild(this.parentNode);
  subtotal -= Number.parseFloat(this.parentNode.childNodes[3].innerText);
  updatePrice();
}

function changeRate(rates) {
  RATE_TABLE.innerHTML = changePercentage(rates);
  rate = rates / 100;
  updatePrice();
}
