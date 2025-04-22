document.addEventListener('DOMContentLoaded', () => {
    const formGasto = document.getElementById('form-gasto');
    const listaGastos = document.getElementById('lista-gastos');
    const totalElement = document.getElementById('total');
    let totalGasto = 0;

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
                <span>${descricao}</span> -
                <span>R$ ${valor.toFixed(2)}</span>
                <small>(${categoria})</small>
            </div>
            <button class="remover-gasto-btn">x</button>
        `;
        listaGastos.appendChild(novoItem);
        atualizarTotal(valor);
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