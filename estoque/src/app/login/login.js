import { supabase } from "@/lib/supabase/client";

const formLogin = document.getElementById("form-login");
const botaoEntrar = formLogin.querySelector("button[type=submit]");

formLogin.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const senha = document.getElementById("login-senha").value;

    botaoEntrar.disabled = true;
    const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: senha
    });
    botaoEntrar.disabled = false;

    if (error) {
        mostrarMensagem(traduzirErro(error));
        return;
    }

    if (error) {
        mostrarMensagem(traduzirErro(error));
        return;
    }

    window.location.href = "inicio.html";
});