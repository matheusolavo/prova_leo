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
    });
});