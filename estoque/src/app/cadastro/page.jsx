import styles from './stylecad.module.css'

export default function Cadastro() {
    return (
        <main class="caixa">
            <h1 class="logo">Mini Market Place</h1>
            <section id="tela-cadastro">
                <h2>Cadastrar</h2>
                <form id="form-cadastro">
                    <label for="cad-email">E-mail</label>
                    <input type="email" id="cad-email" required />

                    <label for="cad-senha">Senha</label>
                    <input type="password" id="cad-senha" minlength="6" required />

                    <label for="cad-confirma">Confirmar senha</label>
                    <input type="password" id="cad-confirma" required />

                    <button type="submit" class="botao">
                        Cadastrar
                    </button>
                </form>
            </section>
            <p id="mensagem" hidden></p>
            <script src=""
        </main>
    );
}
