const botao = document.getElementById('meu-botao');
const inputText = document.getElementById('texto');
const lista = [];
const container = document.getElementById('meu-container');
const botaoLista = document.getElementById('minha-lista');


botao.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = inputText.value
    ul.appendChild(li);

    console.log('clicou');

    inputText.value = "";
    lista.push(inputText);

});

botaoLista.addEventListener('click', () => {
  
})