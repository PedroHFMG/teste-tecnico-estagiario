const productsInCart = [
  {
    id: 1,
    name: "Product 1", // Nome do produto
    price: 100.0, // Preço do produto
    quantity: 3, // Quantidade do produto
    freight: 10.0, // Custo de frete
  },
  {
    id: 2,
    name: "Product 2",
    price: 200.0,
    quantity: 2,
    freight: 20.0,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300.0,
    quantity: 1,
    freight: 30.0,
  },
];

//Quantidade total de produtos no carrinho
var qtdTotal = productsInCart.reduce((accum, item) => accum + item.quantity, 0);

//Valor total do primeiro produto
var array_produto1 = productsInCart.find(array_produto1 => array_produto1.name === "Product 1");
var subTotal_prod1 = array_produto1.price * array_produto1.quantity;

//Valor total do segundo produto
var array_produto2 = productsInCart.find(array_produto2 => array_produto2.name === "Product 2");
var subTotal_prod2 = array_produto2.price * array_produto2.quantity;

//Valor total do terceiro produto
var array_produto3 = productsInCart.find(array_produto3 => array_produto3.name === "Product 3");
var subTotal_prod3 = array_produto3.price * array_produto3.quantity;

//Array com os três fretes para comparação dos valores para saber qual o maior
var fretes_array = productsInCart.map(({freight}) => freight);
var freteValor = Math.max.apply(Math, fretes_array);

//Valor de todos os produtos do carrinho (retirando o valor do frete)
var subTotal = subTotal_prod1 + subTotal_prod2 + subTotal_prod3;

//Valor final do carrinho (frete + subtotal)
var precoFinal = subTotal + freteValor;

document.getElementById("cart-quantity-value").innerHTML = qtdTotal;
document.getElementById("cart-subtotal-value").innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(subTotal);
document.getElementById("cart-freight-value").innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(freteValor);
document.getElementById("cart-total-value").innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(precoFinal);