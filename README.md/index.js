//desenvolvimento1
let frutas = ["maçã", "banana", "laranja"];
console.log(`${frutas.length}`);

//desenvolvimento2
let animais = ["cachorro", "gato", "coelho"];
const maiusculas = animais.map(item => item.toUpperCase());
console.table(maiusculas);

//desenvolvimento3
let celulares = ["iPhone", "Samsung", "Motorola"];
for (let i = 0; i < celulares.length; i++) {
    console.log(celulares[i]);
}

//desenvolvimento4
let array = [1, 2, 3, 4, 5,6];
if (array.length > 5) {
    console.log("O array possui quantidade suficiente de registros.");
} else {
    console.log("O array não possui quantidade suficiente de registros.");
}
