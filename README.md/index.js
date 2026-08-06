let marcas = ["chanel", "dior", "miumiu", "fendi", "armani"]
let removido = marcas.pop();
console.log(marcas);  //exibir ["chanel", "dior", "miumiu", "fendi"]
console.log(removido); //exibir "armani"

//adicionar elemento
let marcas2 = ["chanel", "dior", "miumiu", "fendi"]
marcas2.push("armani")
console.log(marcas2);

 //registros utilizando
const registros = []
let preco = 0
{ marca: "chanel", preco; 10.000; Ativo: true };
{ marca: "dior", preco; 12.000; Ativo: true; };
{ marca: "miumiu", preco; 8.000; Ativo: false};
const Apenasativos = registros.filter((registro) => registro.Ativos === true);


console.log(Apenasativos);


// Inverter a ordem corretamente
const marcas3 = ["chanel", "hermes", "miumiu"];
marcas3.reverse(0);

console.table(marcas3); // Saída: ["miumiu", "hermes", "chanel"]
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
let alunos = ["João", "Maria", "Pedro"];
alunos.shift(0);
console.table(alunos);
//----------------------------------------------------------------------------------------
let mercado = ["arroz", "feijão", "macarrão"];
mercado.unshift()
console.table(mercado);
//----------------------------------------------------------------------------------------
let peças = ["parafuso", "porca", "arruela"];
console.log(peças.find((peça) => peça === "parafuso"));
//----------------------------------------------------------------------------------------
let materias = ["Matemática", "Português", "História"]
materias.sort()
console.table(materias);
//----------------------------------------------------------------------------------------
