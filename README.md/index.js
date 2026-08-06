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
