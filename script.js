document.addEventListener('DOMContentLoaded', () => {
    const formGasto = document.getElementById('form-gasto');
    const listaGastos = document.getElementById('lista-gastos');
    const totalElement = document.getElementById('total');
    let totalGasto = 0;

    function adicionarEventListenersRemover(listItem) {
        const botaoRemover = listItem.querySelector('.remover-gasto-btn');
        if (botaoRemover) {
            botaoRemover.addEventListener('click', function() {
                const valorRemovido = parseFloat(this.dataset.valor);
                removerGasto(listItem, valorRemovido);
            });
        }
    }

    formGasto.addEventListener('submit', function(event) {
        event.preventDefault();
        const descricao = document.getElementById('descricao').value;
        const valor = parseFloat(document.getElementById('valor').value);
        const categoria = document.getElementById('categoria').value;
        if (descricao && !isNaN(valor)) {
            adicionarGasto(descricao, valor, categoria);
            formGasto.reset();
        } else {
            alert('Por favor, preencha a descrição e um valor válido.');
        }
    });

    function adicionarGasto(descricao, valor, categoria) {
        const novoItem = document.createElement('li');
        novoItem.innerHTML = `
            <div class="gasto-info">
                <span class="descricao">${descricao}</span> -
                <span class="valor">R$ ${valor.toFixed(2)}</span>
                <small>(${categoria})</small>
            </div>
            <button class="remover-gasto-btn" data-valor="${valor}" data-descricao="${descricao}" data-categoria="${categoria}">x</button>
            <button class="editar-gasto-btn">Editar</button>
        `;

        const valorElement = novoItem.querySelector('.valor');
        if (valor > 100) {
            valorElement.classList.add('gasto-alto');
        }

        adicionarEventListenersRemover(novoItem);
        listaGastos.appendChild(novoItem);
        atualizarTotal(valor);
    }

    listaGastos.addEventListener('click', function(event) {
        if (event.target.classList.contains('editar-gasto-btn')) {
            const listItem = event.target.closest('li');
            editarItemGasto(listItem);
        }
    });

    function editarItemGasto(listItem) {
        const descricaoElement = listItem.querySelector('.descricao');
        const valorElement = listItem.querySelector('.valor');
        const categoriaElement = listItem.querySelector('small');
        const botaoRemover = listItem.querySelector('.remover-gasto-btn');

        const descricaoAtual = botaoRemover.dataset.descricao;
        const valorAtual = parseFloat(botaoRemover.dataset.valor);
        const categoriaAtual = botaoRemover.dataset.categoria.replace('(', '').replace(')', '');

        listItem.innerHTML = `
            <input type="text" class="edit-descricao" value="${descricaoAtual}">
            <input type="number" class="edit-valor" step="0.01" value="${valorAtual}">
            <select class="edit-categoria">
                <option value="alimentacao" ${categoriaAtual === 'alimentacao' ? 'selected' : ''}>Alimentação</option>
                <option value="transporte" ${categoriaAtual === 'transporte' ? 'selected' : ''}>Transporte</option>
                <option value="lazer" ${categoriaAtual === 'lazer' ? 'selected' : ''}>Lazer</option>
                <option value="contas" ${categoriaAtual === 'contas' ? 'selected' : ''}>Contas</option>
                <option value="outros" ${categoriaAtual === 'outros' ? 'selected' : ''}>Outros</option>
            </select>
            <button class="salvar-edicao-btn">Salvar</button>
            <button class="cancelar-edicao-btn">Cancelar</button>
        `;

        const salvarBotao = listItem.querySelector('.salvar-edicao-btn');
        const cancelarBotao = listItem.querySelector('.cancelar-edicao-btn');
        const editDescricaoInput = listItem.querySelector('.edit-descricao');
        const editValorInput = listItem.querySelector('.edit-valor');
        const editCategoriaSelect = listItem.querySelector('.edit-categoria');

        const valorOriginal = valorAtual;

        cancelarBotao.addEventListener('click', function() {
            listItem.innerHTML = `
                <div class="gasto-info">
                    <span class="descricao">${descricaoAtual}</span> -
                    <span class="valor">R$ ${valorAtual.toFixed(2)}</span>
                    <small>(${categoriaAtual ? `(${categoriaAtual})` : ''}</small>
                </div>
                <button class="remover-gasto-btn" data-valor="${valorAtual}" data-descricao="${descricaoAtual}" data-categoria="${categoriaAtual}">x</button>
                <button class="editar-gasto-btn">Editar</button>
            `;
            adicionarEventListenersRemover(listItem);
        });

        salvarBotao.addEventListener('click', function() {
            const novaDescricao = editDescricaoInput.value;
            const novoValor = parseFloat(editValorInput.value);
            const novaCategoria = editCategoriaSelect.value;

            if (!isNaN(novoValor)) {
                atualizarTotal(novoValor - valorOriginal);
                listItem.innerHTML = `
                    <div class="gasto-info">
                        <span class="descricao">${novaDescricao}</span> -
                        <span class="valor">R$ ${novoValor.toFixed(2)}</span>
                        <small>(${novaCategoria})</small>
                    </div>
                    <button class="remover-gasto-btn" data-valor="${novoValor}" data-descricao="${novaDescricao}" data-categoria="${novaCategoria}">x</button>
                    <button class="editar-gasto-btn">Editar</button>
                `;
                adicionarEventListenersRemover(listItem);
                const novoValorElement = listItem.querySelector('.valor');
                if (novoValor > 100) {
                    novoValorElement.classList.add('gasto-alto');
                }
            } else {
                alert('Por favor, insira um valor válido para o gasto.');
            }
        });
    }

    function removerGasto(itemParaRemover, valorRemovido) {
        listaGastos.removeChild(itemParaRemover);
        atualizarTotal(-valorRemovido);
    }

    function atualizarTotal(valor) {
        totalGasto += valor;
        totalElement.textContent = totalGasto.toFixed(2);
    }
});