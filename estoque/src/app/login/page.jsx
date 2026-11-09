import styles from "../cadastro/stylecad.module.css";

export default function () {
    return (
        <main class="caixa">
            <h1 class="logo">Mini Market Place</h1>
            <section id="tela-login">
                <h2>Entrar</h2>
                <form id="form-login">
                    <label for="login-email">E-mail</label>
                    <input type="email" id="login-email" required />
                    <label for="login-senha">Senha</label>
                    <input type="password" id="login-senha" required />
                    <button type="submit" class="botao">Entrar</button>
                </form>
            </section>
            <p id="mensagem" hidden></p>
            <script src="login.js"></script>
        </main>
    );
}