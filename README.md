
# Controle de Gastos Diários


Um aplicativo simples para controlar seus gastos diários, permitindo adicionar a descrição, o valor e a categoria de cada despesa, além de exibir uma lista dos gastos registrados e o total gasto.

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Sobre o Projeto

Este projeto é um aplicativo minimalista desenvolvido com HTML, CSS e JavaScript para ajudar os usuários a monitorar seus gastos diários de forma fácil e intuitiva. Ele oferece uma interface simples para adicionar novas despesas, categorizá-las e visualizar o total gasto.

## Funcionalidades

* **Adicionar Novo Gasto:** Permite inserir a descrição, o valor (em Reais - R$) e a categoria do gasto através de um formulário.
* **Listagem de Gastos:** Exibe uma lista dos gastos registrados, mostrando a descrição, o valor e a categoria de cada um.
* **Remover Gasto:** Cada item da lista de gastos possui um botão para remover o respectivo gasto, atualizando o total automaticamente.
* **Edição de Gasto:** Permite editar a descrição, o valor e a categoria de um gasto já registrado.
* **Total de Gastos:** Calcula e exibe o valor total de todos os gastos registrados.
* **Destaque de Gastos Altos:** Gastos com valor superior a R$ 100.00 são destacados visualmente na lista.

## Como Usar


1.  **Adicionando um gasto:**
    * No formulário "Adicionar Novo Gasto", preencha os campos:
        * **Descrição:** Uma breve descrição do gasto (ex: "Almoço na padaria").
        * **Valor (R$):** O valor do gasto em Reais (use ponto para separar os centavos, ex: 25.50).
        * **Categoria:** Selecione a categoria do gasto (Alimentação, Transporte, Lazer, Contas, Outros).
    * Clique no botão "Adicionar Gasto". O gasto será adicionado à lista e o total será atualizado.
2.  **Removendo um gasto:**
    * Na seção "Gastos Registrados", localize o gasto que deseja remover.
    * Clique no botão "x" ao lado do item do gasto. O gasto será removido da lista e o total será atualizado.
3.  **Editando um gasto:**
    * Na seção "Gastos Registrados", localize o gasto que deseja editar.
    * Clique no botão "Editar" ao lado do item do gasto.
    * Os detalhes do gasto se tornarão campos de edição. Modifique a descrição, o valor e/ou a categoria conforme necessário.
    * Clique no botão "Salvar" para aplicar as alterações ou "Cancelar" para voltar ao estado original.

## Tecnologias Utilizadas

* **HTML5:** Utilizado para a estrutura e o conteúdo da página web.
* **CSS3:** Utilizado para a estilização visual e o layout da página.
* **JavaScript:** Utilizado para adicionar interatividade, manipular o DOM (Document Object Model) e implementar a lógica do controle de gastos.