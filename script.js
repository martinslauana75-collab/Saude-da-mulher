function abrir(id) {
  let conteudos = document.querySelectorAll('.conteudo');

  conteudos.forEach(c => c.style.display = 'none');

  document.getElementById(id).style.display = 'block';
}

const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});