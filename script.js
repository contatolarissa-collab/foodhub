/* ================================================
   FOODHUB - Projeto Iniciante
   Arquivo: script.js
   Descrição: JavaScript bem simples
   ================================================ */

/* ===== FUNÇÃO 1: Mostrar modal de confirmação ===== */
function mostrarConfirmacao() {
    document.getElementById("modal").classList.add("show");
}

/* ===== FUNÇÃO 2: Fechar modal ===== */
function fecharModal() {
    document.getElementById("modal").classList.remove("show");
}

/* ===== FUNÇÃO 3: Voltar para home ===== */
function voltarHome() {
    window.location.href = "index.html";
}

/* ===== FUNÇÃO 4: Ir para cardápio (simples) ===== */
function irParaCardapio() {
    window.location.href = "cardapio.html";
}

/* ===== FUNÇÃO 5: Ir para pagamento (simples) ===== */
function irParaPagamento() {
    window.location.href = "pagamento.html";
}
