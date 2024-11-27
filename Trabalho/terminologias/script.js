function performSearch(event) {
    event.preventDefault();  // Evita o comportamento padrão do formulário (recarregar a página)

    const searchQuery = document.getElementById('searchQuery').value.trim(); // Captura o valor do campo de busca

    if (searchQuery === "") {
      alert("Por favor, insira um termo para pesquisar."); // Alerta se o campo estiver vazio
    } else {
      // Aqui você pode personalizar o que acontece com o termo de busca:
      // Por exemplo, simular uma busca ou redirecionar o usuário:
      // Exemplo de redirecionamento (pode ser para uma página de resultados de busca):
      alert(`Você buscou por: ${searchQuery}`);
      // window.location.href = `resultados.html?query=${searchQuery}`; // Exemplo de redirecionamento
    }
  }