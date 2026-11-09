import styles from "./style2.css";

export default function Inicio() {
    return (
        <main class="caixa">
            <h1 class="logo">Mini Market Place</h1>
            <p class="boas-vindas">
                Bem vindo ao Mini Market Place
                (<span id="usuario">usuário logado</span>)
            </p>
            <nav class="menu">
                <a href="entrada.html" class="opcao">
                    <strong>Entrada de estoque</strong>
                    <span>Registrar produtos que chegaram</span>
                </a>
                <a href="saida.html" class="opcao">
                    <strong>Saída de estoque</strong>
                    <span>Registrar produtos que saíram</span>
                </a>
                <a href="inventario.html" class="opcao">
                    <strong>Inventário</strong>
                    <span>Consultar o estoque atual</span>
                </a>
            </nav>
            <nav class="menu-admin" id="menu-admin" hidden>
                <a href="cadastro.html" class="opcao">
                    <strong>Cadastrar funcionário</strong>
                    <span>Criar contas de acesso para a equipe</span>
                </a>
            </nav>
            <button type="button" class="botao" id="sair">Sair</button>
        </main>
    );
}