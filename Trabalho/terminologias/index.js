 // Função para abrir o modal
 function abrirModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('show');
    modal.classList.remove('hide');
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hide');
    modal.classList.remove('show');
}

// Fecha o modal ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target === document.getElementById('modal')) {
        fecharModal();
    }
}