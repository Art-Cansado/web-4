
console.log("===== BLOCO 1: ARRAYS =====");

// 1. Criando um array com três nomes.
const nomes = ["Arthur", "Maria", "João"];

// forEach percorre o array e executa uma ação para cada nome.
nomes.forEach(function(nome) {
    console.log(`Olá, ${nome}!`);
});

// map cria um novo array com os nomes em letras maiúsculas.
const nomesMaiusculos = nomes.map(function(nome) {
    return nome.toUpperCase();
});

console.log("Nomes em maiúsculas:", nomesMaiusculos);


// 2. Filtrando e somando preços.
const precos = [10, 25, 40, 5, 60];

// filter seleciona somente os preços maiores que 20.
const precosMaioresQue20 = precos.filter(function(preco) {
    return preco > 20;
});

console.log("Preços maiores que 20:", precosMaioresQue20);

// reduce soma todos os valores do array.
const somaPrecos = precos.reduce(function(total, preco) {
    return total + preco;
}, 0);

console.log("Soma dos preços:", somaPrecos);


// 3. Trabalhando com objetos de produtos.
const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Caneta", preco: 5 },
    { nome: "Mochila", preco: 80 },
    { nome: "Livro", preco: 35 }
];

// map cria um array contendo apenas os nomes dos produtos.
const nomesProdutos = produtos.map(function(produto) {
    return produto.nome;
});

console.log("Nomes dos produtos:", nomesProdutos);

// filter seleciona produtos com preço inferior a 50.
const produtosBaratos = produtos.filter(function(produto) {
    return produto.preco < 50;
});

console.log("Produtos abaixo de R$ 50:", produtosBaratos);

// reduce soma os preços de todos os produtos.
const totalProdutos = produtos.reduce(function(total, produto) {
    return total + produto.preco;
}, 0);

console.log("Valor total dos produtos: R$", totalProdutos);

// forEach mostra o nome e o preço de cada produto.
produtos.forEach(function(produto) {
    console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
});


console.log("===== BLOCO 2: DOM =====");

// Seleciona o título e altera seu conteúdo.
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Arthur";

// Seleciona todos os parágrafos com a classe texto.
const textos = document.querySelectorAll(".texto");

textos.forEach(function(texto) {
    console.log("Texto encontrado:", texto.textContent);
});

// Seleciona a lista.
const lista = document.querySelector("#lista");

// Adiciona dois itens usando innerHTML.
lista.innerHTML += `
    <li>Item adicionado pelo innerHTML 1</li>
    <li>Item adicionado pelo innerHTML 2</li>
`;

// Cria um elemento li usando JavaScript.
const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.appendChild(terceiroItem);

// Adiciona a classe destaque ao título.
titulo.classList.add("destaque");

console.log(
    "O título tem a classe destaque?",
    titulo.classList.contains("destaque")
);

// Array de tarefas.
const tarefas = [
    "Estudar JS",
    "Fazer exercícios",
    "Revisar DOM"
];

// Cria um li para cada tarefa e adiciona à lista.
tarefas.forEach(function(tarefa) {
    const item = document.createElement("li");
    item.textContent = tarefa;
    lista.appendChild(item);
});

// Marca o primeiro item da lista como feito.
const primeiroItem = lista.querySelector("li");

if (primeiroItem) {
    primeiroItem.classList.add("feito");
}

// Mostra a quantidade total de itens.
console.log("Total de itens na lista:", lista.querySelectorAll("li").length);


console.log("===== BLOCO 3: EVENTOS =====");

// Evento de clique no botão.
const botao = document.querySelector("#botao");

botao.addEventListener("click", function() {
    console.log("Clicou!");
});

// Altera o texto do botão quando o mouse passa sobre ele.
botao.addEventListener("mouseover", function() {
    botao.textContent = "Pode clicar!";
});

// Registra o valor do campo de nome enquanto o usuário digita.
const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", function() {
    console.log("Nome digitado:", campoNome.value);
});

// Event Delegation:
// um único evento na lista trata cliques em seus itens.
lista.addEventListener("click", function(evento) {
    if (evento.target.tagName === "LI") {
        evento.target.classList.toggle("feito");
        console.log("Item clicado:", evento.target.textContent);
    }
});

// Formulário para adicionar tarefas.
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", function(evento) {
    // Impede que a página recarregue ao enviar o formulário.
    evento.preventDefault();

    // Remove espaços desnecessários no início e no fim.
    const textoTarefa = campoTarefa.value.trim();

    // Não adiciona tarefas vazias.
    if (textoTarefa === "") {
        return;
    }

    // Cria um novo item e adiciona à lista.
    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = textoTarefa;
    lista.appendChild(novaTarefa);

    // Limpa o campo após adicionar.
    campoTarefa.value = "";
});
