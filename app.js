function pesquisar() {
    // Obtém a seção HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa"); 

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";

    // Itera sobre cada elemento (carta) dentro do array Cartas.
    for (let dado of Cartas) {
        // Concatena HTML para cada resultado, formatando os dados da carta.
        resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `;
    }

    // Atribui a string com todos os resultados ao conteúdo HTML da seção.
    section.innerHTML = resultados;
}
//pega uma tag section do HTML e obtem todo conteúdo dentro dela ; assim visualizando no HTML