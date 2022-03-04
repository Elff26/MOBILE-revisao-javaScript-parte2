//pares chave/valor
let pessoa = {
    nome: "João",
    idade: 17
}
//o acesso a propriedades pode ser feito com ponto
console.log("Me chamo " + pessoa.nome);
//e com [] também
console.log("Tenho " + pessoa["idade"] + " anos");

let pessoaComEndereco = {
    nome: "Maria",
    idade: 21,
    endereco: {
        logradouro: "Rua B",
        numero: 121
    }
 };
 console.log(
    `Sou ${pessoaComEndereco.nome},
    tenho ${pessoaComEndereco.idade} anos
    e moro na rua ${pessoaComEndereco.endereco["logradouro"]}
    número ${pessoaComEndereco["endereco"]["numero"]}`
 );

 let concessionaria = {
    cnpj: "00011122210001-45",
    endereco: {
        logradouro: "Rua A",
        numero: 10,
        bairro: "Vila J",
    },
    veiculos: [
    {
        marca: "Ford",
        modelo: "Ecosport",
        anoDeFabricacao: 2018,
        revisoes:[
            {
                data: "12/02/2013",
                consultor: "André"
            },
            {
                data: "14/02/2014",
                consultor: "Pedro"
            }
        ]
    },
    {
        marca: "Chevrolet",
        modelo: "Onix",
        anoDeFabricacao: 2020,
    },
    {
        marca: "Volkswagen",
        modelo: "Nivus",
        anoDeFabricacao: 2020,
    }]
};

//  for (let veiculo of concessionaria.veiculos) {
//  console.log(`Marca: ${veiculo.marca}`);
//  console.log(`Modelo: ${veiculo.modelo}`);
//  console.log(`Ano de Fabricação:${veiculo.anoDeFabricacao}`);
//  console.log(`Consultor:${veiculo.revisoes}`)
//  }

//Exibir o nome Pedro
//Indexar para conseguir chegar onde eu quero.
 console.log(concessionaria.veiculos[0].revisoes[1].consultor)

//JSON também aceita funções
let calculadora ={
    soma: (a,b)=> a+b,
    subtracao: function(a,b){
        return a-b;
    }
}
console.log(calculadora.soma(2,3))
console.log(calculadora.subtracao(5,4))
 