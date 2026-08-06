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
{ marca: "chanel", preco; 10.000; Ativo: true };
{ marca: "dior", preco; 12.000; Ativo: true; };
{ marca: "miumiu", preco; 8.000; Ativo: false};
const Apenasativos = registros.filter((registro) => registro.Ativos === true);


console.log(Apenasativos);


//Inventar ordem
const mascas3 = ["chanel", "hermes", "mimiu"]
marcas3.reverse();


console.log(marcas3); //saida: ["miumiu", "hermes", "chanel"]
