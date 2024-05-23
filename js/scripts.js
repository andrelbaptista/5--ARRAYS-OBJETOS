// Arrays
const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof lista);

const itens = ["André", 55, 1.78, "M", true, ["careca", " azul", "branco"]];
console.log(itens);

// index e length
const serie = [1, 2, 3, 4];
console.log(`A serie ${serie} tem ${serie.length} itens !`);
console.log(`O primeiro número é ${serie[0]} e o último número é ${serie[3]}`);

const nomeESobrenome = "André Baptista";
console.log(
  `O nome e sobrenome: ${nomeESobrenome} .Tem ${nomeESobrenome.length} caracteres`
);
console.log(`O primeiro carecter é ${nomeESobrenome[0]}`);

// métodos
const sequenciaUm = [1, 2, 3, 4];
const sequenciaDois = [4, 3, 2, 1];
const textoArray = "Olá bom dia !";

const sequenciaTodas = sequenciaUm.concat(sequenciaDois);
console.log(`Esta é a sequência concatenada ${sequenciaTodas}`);

console.log(textoArray.indexOf("o"));
console.log(typeof textoArray.indexOf);

// Objeto - object literals
const cliente = {
  nome: "André",
  sobrenome: "Baptista",
  idade: 51,
  sexo: "M",
  casado: true,
  profissao: "programador",
};
console.log(cliente);
console.log(cliente.nome.concat(cliente.sobrenome));
console.log(typeof cliente);

// adicionando e excluindo propriedades
const carro = {
  fabricante: "FIAT",
  modelo: "Fastback",
  versao: "200 TSI",
  cor: "Preto",
};

console.log(carro);

carro.portas = 4;
console.log(carro);

delete carro.cor;
console.log(carro);

const objetoUm = {
  a: "teste",
  b: 3.2,
  c: [],
};
console.log(objetoUm);

const objetoDois = {
  d: true,
  e: "zip",
};
console.log(objetoDois);

Object.assign(objetoDois, objetoUm);
console.log(objetoDois);

console.log(objetoUm instanceof Object);
console.log(objetoDois instanceof Object);

console.log(Object.keys(objetoUm));
console.log(Object.keys(objetoDois));
console.log(Object.keys(carro));

console.log(Object.entries(objetoUm));
console.log(Object.entries(objetoDois));
console.log(Object.entries(carro));

// mutação
const objetoA = {
  nome: "André",
};

const objetoB = objetoA;

console.log(objetoA);
console.log(objetoB);
console.log(objetoA === objetoB);

objetoA.idade = 31;

console.log(objetoA);
console.log(objetoB);
console.log(objetoA === objetoB);

delete objetoB.idade;
console.log(objetoA);
console.log(objetoB);
console.log(objetoA === objetoB);

// loop em array
const usuarios = ["André", "Jaqueline", "Carolina", "Ian", "João"];
for (let i = 0; i < usuarios.length; i++) {
  console.log(`O nome do usuário é: ${usuarios[i]}`);
}

//  push e pop
const testando = [1, 2, 3, 4, 5];
console.log(testando);

testando.push("a", "b");
console.log(testando);

const removidoFim = testando.pop();
console.log(testando);
console.log(removidoFim);

// shift unshift
const letras = ["a", "b", "c", "d"];
console.log(letras);

const removidoInicio = letras.shift();
console.log(letras);
console.log(removidoInicio);

letras.unshift("t", "u", "v");
console.log(letras);

letras.unshift("z");
console.log(letras);

// lindexOf lastindexOf
const frutas = ["caqui", "uva", "limão", "graviola", "uva"];
console.log(frutas);

console.log(`a posição do limão é: ${frutas.indexOf("limão")}`);
console.log(frutas[2]);
console.log(frutas[frutas.indexOf("limão")]);
console.log(frutas.indexOf("uva"));
console.log(frutas.lastIndexOf("uva"));
console.log(frutas.indexOf("jaca"));
console.log(frutas.lastIndexOf("jaca"));

// slice
const clubes = ["Flamengo", "Fluminense", "Vasco", "Bangu", "Botafogo"];
console.log(clubes);

const clubesMelhores = clubes.slice(0, 1);
const clubesBons = clubes.slice(0, 1 + 1);
const clubesSegunda = clubes.slice(10, 20);
const clubesFracos = clubes.slice(2);
console.log(`O melhor clube é o ${clubesMelhores}`);
console.log(`Os clubes bons são: ${clubesBons}`);
console.log(`Os clubes de segunda são ${clubesSegunda}`);
console.log(clubesSegunda);
console.log(`Os clubes fracos são ${clubesFracos}`);

// foreach
const valoresPagos = [
  {
    contratado: "DeepTech",
    valor: 10.0,
  },
  {
    contratado: "InformalDigital",
    valor: 1000.0,
  },
  {
    contratado: "XXXX",
    valor: 10000.0,
  },
];

valoresPagos.forEach((valorPago) => {
    console.log(`O valor pago a ${valorPago.contratado} é de R$ ${valorPago.valor}`);
});

// includes
const marcas =["VW","FIAT","PEUGEOT","CITROEN"];
console.log(marcas.includes("VW"));

if (marcas.includes("FIAT")) {
    console.log("Existem carros da marca FIAT !");
};

// reverse
const numOrdem = [1,2,3,4,5,6,7];
console.log(numOrdem);

numOrdem.reverse();
console.log(`O reverse altera a ordem do array original: ${numOrdem}`);

// trim
const textoSanitizacao = "        Olá, tudo bem ? \n e ai           ";
console.log(textoSanitizacao);

console.log(textoSanitizacao.trim());

console.log(textoSanitizacao.length);

console.log(textoSanitizacao.trim().length);

// padstart padend
const numero = "1";
const numeroPadstart = numero.padStart(5,"0");
const numeroPadend = numero.padEnd(5,"0");

console.log(numero);
console.log(numeroPadstart);
console.log(numeroPadend);

// split
const frase ="O rato roeu a roupa do Rei de Roma";
const arrayFrase = frase.split(" ");

console.log(frase);
console.log(arrayFrase);

// join
const fraseSeparada = ["Olá,", "sabe qual é", "a previsão? "];
const fraseJunta = fraseSeparada.join(", ");

console.log(fraseSeparada);
console.log(fraseJunta);

// repeat
const palavra = "Testando ";
console.log(palavra.repeat(5));

// rest Operator
const somaInfinita = (...args) => {
  let xyz = 0;
  console.log( args.length);
  for (let i = 0; i < args.length; i++) {
    xyz += args[i];
    console.log(`args: ${args[i]}`);
  }
  return xyz;
};

console.log(somaInfinita (1,2,3,4));

