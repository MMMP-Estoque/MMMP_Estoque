import { supabase } from "@/lib/supabase/client";

async function iniciar() {
    const { data } = await supabase.auth.getSession();

    if (!data.session) {
        window.location.href = "login.html";
        return;
    }

    const usuario = data.session.user;


    document.getElementById("usuario").textContent = usuario.email;


    const { data: registro } = await supabase
        .from("usuarios")
        .select("administrador")
        .eq("id", usuario.id)
        .single();

    const ehAdministrador = registro ? registro.administrador : false;

    document.getElementById("menu-admin").hidden = !ehAdministrador;
}

iniciar();



document.getElementById("sair").addEventListener("click", async function () {
    await supabase.auth.signOut();
    window.location.href = "login.html";
});