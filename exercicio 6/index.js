const botao = document.getElementById('meu-botao');
const inputText = document.getElementById('texto');
const paragrafo = document.getElementsByTagName('p')



botao.addEventListener('click', () => {
    const novoParagrafo = document.createElement('p');
    novoParagrafo.innerText = inputText.value;
    document.body.appendChild(novoParagrafo);
    inputText.value = "";
});
