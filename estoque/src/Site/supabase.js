const SUPABASE_URL = "https://cigjhyaywkumpcoatqsn.supabase.co";
const SUPABASE_KEY = "sb_publishable_FmxcT6fM-89O-_yFySbOWQ_uyCtSDvF";

const clienteSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function mostrarMensagem(texto) {
  const caixa = document.getElementById("mensagem");
  caixa.textContent = texto;
  caixa.hidden = false;
}

function traduzirErro(erro) {
  const msg = (erro.message || "").toLowerCase();

  if (msg.includes("invalid login credentials")) return "E-mail ou senha incorretos.";
  if (msg.includes("email not confirmed")) return "Confirme seu e-mail antes de entrar.";
  if (msg.includes("already registered")) return "Este e-mail já está cadastrado.";
  if (msg.includes("password should be")) return "A senha deve ter pelo menos 6 caracteres.";
  if (msg.includes("rate limit")) return "Muitas tentativas. Aguarde um pouco e tente de novo.";

  return "Não foi possível concluir a operação. Tente novamente.";
}