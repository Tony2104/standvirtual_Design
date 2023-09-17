let button = document.querySelectorAll(".buscar .especificacao div button");
let conteudo = document.querySelectorAll(".buscar .conteudo");

function showconteudo(id, color) {
  button.forEach(function (css) {
    css.style.backgroundColor="";
    css.style.color="";
  });

  button[id].style.color = "#0071ce";
  button[id].style.backgroundColor = "white";

  conteudo.forEach(function (css) {
    css.style.display="none";
  });

  conteudo[id].style.display="block";

}

showconteudo(0, "#0071ce")