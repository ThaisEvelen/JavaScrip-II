const nome = 'Thais'
console.log(nome);

const a = 1
const b = 2
console.log(a + b);

const idade = 33
console.log('Minha idade é', idade);

function maiorDeIdade(anos) {
    if (anos < 0) {
        console.log('Idade inválida');
    }
    else if (anos < 18) {
        console.log('Você é menor de 18 anos');
    } else if (anos >= 18) {
        console.log('Vocé é maior de 18 anos');
    }
}

maiorDeIdade(18);
maiorDeIdade(10);
maiorDeIdade(-1);



function notasFimDeAno(notas) {
    if (notas < 0 || notas > 10) {
        console.log('Você adionou uma nota inválida');
    } else if (notas < 7) {
        console.log('Reprovado');
    } else {
        console.log('Aprovado');
    }
}

notasFimDeAno(0);
notasFimDeAno(-1);
notasFimDeAno(11);
notasFimDeAno(8);

const frutas = ['maçã', 'banana', 'uva']
console.log(frutas);

frutas.push('morango');
console.log(frutas.length);

console.log(frutas.includes('banana'));

function contagem(numeros) {
    for (let conta = 1; conta <= numeros; conta++)
        console.log(conta);
}

contagem(10);

for (let i of frutas) {
    console.log(i);
}

function somaAte(numero) {
    let total = 0;
    for (let cont = 1; cont <= numero; cont++)
        total += cont;
    console.log(total);
}

somaAte(100);

function ehMaiorDeIdade(idade1) {
    return idade1 >= 18;
}

console.log(ehMaiorDeIdade(18));
console.log(ehMaiorDeIdade(10));
