const nome = 'Thais'
console.log(nome);

const a = 1
const b = 2
console.log(a + b);

const idade = 33
console.log('Minha idade é', idade);

function maiorDeIdade (anos) {
    if(anos < 0){
        console.log('Idade inválida');
    }
    else if(anos < 18){
        console.log('Você é menor de 18 anos');
    }else if(anos >= 18) {
        console.log('Vocé é maior de 18 anos');
    }
}

maiorDeIdade(18);
maiorDeIdade (10);
maiorDeIdade(-1);

