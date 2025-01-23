 Amigo Secreto

Este projeto é uma aplicação web desenvolvida para facilitar a organização e realização de sorteios de Amigo Secreto de maneira simples, interativa e intuitiva.

Os usuários podem adicionar nomes à lista de participantes, visualizar todos os nomes adicionados e realizar um sorteio aleatório para descobrir o amigo secreto.

📋 Funcionalidades

Adicionar nomes: Permite que o usuário insira os nomes dos participantes em um campo de texto e os adicione à lista.

Validar entradas: Garante que o nome não seja adicionado caso o campo esteja vazio, exibindo um alerta para o usuário.

Visualizar a lista: Exibe em tempo real todos os nomes adicionados em uma lista na tela.

Sortear amigo secreto: Realiza um sorteio aleatório entre os nomes adicionados e exibe o nome do sorteado na tela.

🖼️ Imagens do Projeto

Tela Inicial


Exemplo da interface inicial do projeto.

Lista de Participantes


Visualização dos nomes adicionados à lista.

Resultado do Sorteio


Exibição do nome sorteado como amigo secreto.

🛠️ Tecnologias Utilizadas

HTML5: Estrutura do projeto.

CSS3: Estilização e design responsivo da interface.

JavaScript: Lógica e interatividade do sistema.

📂 Estrutura do Projeto

.
├── index.html       # Arquivo principal contendo a estrutura HTML do projeto
├── style.css        # Arquivo de estilos para personalização visual
├── app.js           # Arquivo com a lógica de programação
└── assets/          # Pasta com imagens e ícones utilizados no projeto

🚀 Como o Código Funciona

Arquivo index.html

Define a estrutura básica do projeto, incluindo:

Um campo de entrada para adicionar nomes.

Uma lista para exibir os participantes.

Um botão para realizar o sorteio.

Exemplo de código:

<div class="input-wrapper">
    <input type="text" id="amigo" class="input-name" placeholder="Digite um nome">
    <button class="button-add" onclick="adicionarAmigo()">Adicionar</button>
</div>

Arquivo style.css

Aplica o design responsivo e estiliza os componentes.

Exemplo:

.button-add {
    background-color: var(--color-tertiary);
    color: var(--color-text);
    border-radius: 0 25px 25px 0;
}

.button-add:hover {
    background-color: #a1a1a1;
}

Arquivo app.js

Função adicionarAmigo()

Captura o valor do campo de entrada.

Valida se o campo não está vazio.

Adiciona o nome ao array e atualiza a lista na tela.

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = '';
}

Função atualizarLista()

Percorre o array de amigos e exibe os nomes na lista.

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const item = document.createElement('li');
        item.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(item);
    });
}

Função sortearAmigo()

Valida se há nomes na lista.

Realiza o sorteio aleatório e exibe o resultado.

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione nomes antes de sortear.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `🎉 O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}

🚀 Como Executar o Projeto

Pré-requisitos

Navegador web atualizado (Google Chrome, Firefox, Edge, etc.).

Editor de texto ou IDE para personalizações (opcional).

Passos para rodar o projeto

Clone o repositório ou baixe os arquivos:

git clone https://github.com/seu-usuario/amigo-secreto.git

Acesse o diretório do projeto:

cd amigo-secreto

Abra o arquivo index.html no navegador.

Interaja com a aplicação:

Adicione nomes ao campo de texto e clique em "Adicionar".

Visualize os nomes adicionados na lista.

Clique em "Sortear amigo" para descobrir o sorteado.

🐛 Possíveis Problemas e Soluções

Problema: Nenhum nome foi adicionado, mas o sorteio foi tentado.

Solução: O sistema exibe um alerta indicando que a lista está vazia. Certifique-se de adicionar ao menos um nome antes de realizar o sorteio.

Problema: Nome duplicado na lista.

Solução: Até o momento, não há validação para nomes duplicados. Essa funcionalidade pode ser adicionada futuramente.