 <h1>Amigo Secreto</h1>

    Este projeto é uma aplicação web desenvolvida para facilitar a organização e realização de sorteios de Amigo Secreto de maneira simples, interativa e intuitiva.

    Os usuários podem adicionar nomes à lista de participantes, visualizar todos os nomes adicionados e realizar um sorteio aleatório para descobrir o amigo secreto.

📋**Funcionalidades**

    Adicionar nomes: Permite que o usuário insira os nomes dos participantes em um campo de texto e os adicione à lista.

    Validar entradas: Garante que o nome não seja adicionado caso o campo esteja vazio, exibindo um alerta para o usuário.

    Visualizar a lista: Exibe em tempo real todos os nomes adicionados em uma lista na tela.

    Sortear amigo secreto: Realiza um sorteio aleatório entre os nomes adicionados e exibe o nome do sorteado na tela.

🛠️ **Tecnologias Utilizadas**

    HTML5: Estrutura do projeto.

    CSS3: Estilização e design responsivo da interface.

    JavaScript: Lógica e interatividade do sistema.

📂 **Estrutura do Projeto**

    .
    ├── index.html       # Arquivo principal contendo a estrutura HTML do projeto
    ├── style.css        # Arquivo de estilos para personalização visual
    ├── app.js           # Arquivo com a lógica de programação
    └── assets/          # Pasta com imagens e ícones utilizados no projeto

🔄 **Fluxo do Processo**

    Adicionar Nome:

    O usuário digita o nome de um participante no campo de entrada.

    Ao clicar no botão "Adicionar", a função adicionarAmigo() é chamada.

    O nome é validado, adicionado ao array amigos e exibido na lista.

    Atualizar Lista:

    Sempre que um nome é adicionado, a função atualizarLista() é executada.

    Essa função recria os elementos da lista no DOM, refletindo o conteúdo atual do array.

    Sortear Amigo:

    Quando o usuário clica no botão "Sortear amigo", a função sortearAmigo() é executada.

    A função valida se há nomes na lista.

    Um índice aleatório é gerado, e o nome correspondente é exibido na tela como resultado.

    Resultado Exibido:

    O nome sorteado aparece em destaque na tela dentro do elemento destinado ao resultado.

**Como o Código Funciona**

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

🚀**Como Executar**

    Pré-requisitos

        Navegador web atualizado (Google Chrome, Firefox, Edge, etc.).

    Acesse o endereço no navegador de sua preferência 
  
   **https://amigo-secreto-sigma-livid.vercel.app/**

    Interaja com a aplicação:
    Adicione nomes ao campo de texto e clique em "Adicionar".
    
![Tela Inicial](assets/Tela%20Inicial.png)  
    Visualize os nomes adicionados na lista.
    Clique em "Sortear amigo" para descobrir o sorteado.
![Adicione nomes](assets/Tela%20Sorteiro.png)

Possíveis Problemas e Soluções

    Problema: Nenhum nome foi adicionado, mas o sorteio foi tentado.
![Adicione nomes](assets/Alerta%20insera%20um%20nome.png)
        Solução: O sistema exibe um alerta indicando que a lista está vazia. Certifique-se de adicionar ao menos um nome antes de   realizar o sorteio.

Solução: O sistema exibe um alerta indicando que a lista está vazia. Certifique-se de adicionar ao menos um nome antes de realizar o sorteio.

Problema: Nome duplicado na lista.

Solução: Até o momento, não há validação para nomes duplicados. Essa funcionalidade pode ser adicionada futuramente.
