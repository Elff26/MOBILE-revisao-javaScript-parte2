function hello (){
    console.log ('Oi')
}
hello()
//cuidado, aqui redefinimos a função sem parâmetros 
function hello (nome){
    console.log ('Hello, '+ nome)
}
hello('Pedro')
function soma (a, b) {
    return a + b;
}
const res = soma (2, 3)
console.log (res)


const dobro = function (n) {
    return n * 2;
};
const result = dobro(4);
console.log(result);
//valor padrão para o parâmetro
const triplo = function (n = 5) {
return 3 * n;
};
console.log(triplo());
console.log(triplo(10));

//arrow functions = lambda
const hello = () => console.log("Hello")
console.log(hello())

const dobro1 = (valor) => valor * 2;
//const dobro1 = valor => valor * 2;
console.log(dobro1(10));

const triplo1 = (valor) => {
    return valor * 3;
};
 console.log(triplo1(10));

 //e agora?
 const ehPar = (n) => {
    n % 2 === 0;
 };
 console.log(ehPar(10));

 