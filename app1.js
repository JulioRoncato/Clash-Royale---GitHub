function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o campo de pesquisa estiver vazio, mostra uma mensagem de erro e sai da função
    if (!campoPesquisa) {
        section.innerHTML = "<p>Puts, essa carta não existe. Tente com uma raridade ou habilidade.</p>";
        return;
    }

    // Converte o termo de pesquisa para letras minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa a variável que armazenará os resultados da pesquisa
    let resultados = "";

    // Itera sobre o array Cartas
    for (let dado of Cartas) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();

        // Verifica se as tags estão definidas e são um array
        let tags = Array.isArray(dado.tags) ? dado.tags.join(" ").toLowerCase() : "";

        // Verifica se o termo de pesquisa está incluído no título, descrição ou tags
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    // Se não houver resultados, exibe uma mensagem de erro
    if (resultados === "") {
        resultados = "<p>Puts, essa carta não existe.</p>";
    }

    // Atualiza o HTML da seção de resultados com os resultados da pesquisa
    section.innerHTML = resultados;
}
