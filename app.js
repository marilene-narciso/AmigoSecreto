//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Declaração de um array para armazenar os nomes dos amigos
let amigos = [];

/**
 * Função para capturar o valor do campo de entrada e adicionar ao array.
 * Essa função valida a entrada, atualiza a lista de amigos e limpa o campo de entrada.
 */
function adicionarAmigo() {
    // Captura o valor do campo de entrada pelo ID
    const input = document.getElementById('amigo');
    const nome = input.value.trim(); // Remove espaços no início e fim do texto

    // Validação: verifica se o campo está vazio
    if (nome === '') {
        alert('Por favor, insira um nome.'); // Exibe mensagem de erro se o campo estiver vazio
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Atualiza a lista visível na página
    atualizarLista();

    // Limpa o campo de entrada após adicionar o nome
    input.value = '';
}

/**
 * Função para atualizar a lista de amigos exibida na página.
 * Ela percorre o array de amigos e cria elementos de lista para exibição.
 */
function atualizarLista() {
    // Obtém o elemento da lista pelo ID
    const lista = document.getElementById('listaAmigos');

    // Limpa o conteúdo anterior da lista para evitar duplicações
    lista.innerHTML = '';

    // Itera sobre o array de amigos e adiciona cada nome como um item de lista
    amigos.forEach((amigo, index) => {
        const item = document.createElement('li'); // Cria um novo elemento <li>
        item.textContent = `${index + 1}. ${amigo}`; // Define o texto do item como "índice. nome"
        lista.appendChild(item); // Adiciona o item à lista
    });
}

/**
 * Função para realizar o sorteio de um amigo da lista.
 * Essa função verifica se há amigos na lista, seleciona um aleatoriamente e exibe o resultado.
 */
function sortearAmigo() {
    // Validação: verifica se o array de amigos não está vazio
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione nomes antes de sortear.'); // Exibe mensagem de erro
        return;
    }

    // Gera um índice aleatório baseado no tamanho do array
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome correspondente ao índice sorteado
    const amigoSorteado = amigos[indiceSorteado];

    // Atualiza o elemento de resultado com o nome sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `🎉 O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}
