import { supabase } from "@/lib/supabase/client";

const formCadastro = document.getElementById("form-cadastro");
const botaoCadastrar = formCadastro.querySelector("button[type=submit]");

formCadastro.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("cad-email").value.trim();
    const senha = document.getElementById("cad-senha").value;
    const confirma = document.getElementById("cad-confirma").value;

    if (senha !== confirma) {
        mostrarMensagem("As senhas não coincidem.");
        return;
    }

    botaoCadastrar.disabled = true;
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: senha
    });
    botaoCadastrar.disabled = false;

    if (error) {
        mostrarMensagem(traduzirErro(error));
        return;
    }

    if (data.session) {
        mostrarMensagem("Cadastro realizado com sucesso!");
    } else {
        mostrarMensagem("Cadastro realizado! Confirme seu e-mail para poder entrar.");
    }

    formCadastro.reset();
    setTimeout(() => { window.location.href = "login.html"; }, 3000);
});