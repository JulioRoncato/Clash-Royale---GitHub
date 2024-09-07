# Clash Royale Search App

Este é um projeto simples de pesquisa sobre cartas do jogo **Clash Royale**. A aplicação permite que o usuário pesquise por cartas ou raridades, retornando informações detalhadas sobre cada carta que corresponde ao termo de busca. A aplicação foi desenvolvida usando **HTML**, **CSS** e **JavaScript**.

## Funcionalidades

- Pesquisa por nome de carta, descrição ou tags associadas.
- Exibição dinâmica dos resultados com links para mais informações.
- Mensagem de erro estilizada quando o termo de pesquisa não encontra resultados.
  
## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização da interface.
- **JavaScript (ES6)**: Manipulação da DOM e lógica de pesquisa.
  
## Como Funciona

Ao digitar o nome de uma carta ou uma raridade no campo de pesquisa e clicar no botão "Pesquisar", a aplicação varre um array de cartas predefinido e exibe as cartas que correspondem ao termo de busca. Se o termo não corresponder a nenhuma carta, uma mensagem de erro será exibida.

### Estrutura do Projeto

- `index.html`: Contém o layout básico da página.
- `styles.css`: Arquivo de estilo que define a aparência da página.
- `app.js`: Arquivo que contém a lógica da pesquisa.
- `dados.js`: Arquivo onde o array de cartas está definido.

## Exemplo de Pesquisa

- Pesquise por uma carta como **Arqueiras**, **Mago de Gelo**, ou **Príncipe**.
- Pesquise por uma habilidade ou característica como **velocidade** ou **longo alcance**.

Se a carta estiver no banco de dados, o resultado será exibido com o nome da carta, sua descrição e um link para mais informações.

### Resultado de Pesquisa com Sucesso

Se a pesquisa encontrar resultados, os dados serão exibidos no seguinte formato:

```html
<div class="item-resultado">
  <h2>
    <a href="link_da_carta" target="_blank">Nome da Carta</a>
  </h2>
  <p class="descricao-meta">Descrição da carta</p>
  <a href="link_da_carta" target="_blank">Mais informações</a>
</div>
