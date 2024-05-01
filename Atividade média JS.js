function calcularmedia(){
    var inNome = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var inNota3 = document.getElementById("inNota3");
    var inNota4 = document.getElementById("inNota4");
    var outMedia = document.getElementById("outMedia");
    var outSituacao = document.getElementById("outSituacao");


    var Nome = inNome.value;
    var Nota1 = parseInt(inNota1.value);
    var Nota2 = parseInt(inNota2.value);
    var Nota3 = parseInt(inNota3.value);
    var Nota4 = parseInt(inNota4.value);

    var media = (Nota1 + Nota2 + Nota3 + Nota4)/4;
    var situacao = parseInt(media.value);

    outMedia.textContent = "Média das notas: " + media.toFixed(2.2);

    if (media >= 6) {
        outSituacao.textContent="Parabéns, " + Nome + ", você está aprovado(a).";
      } else if (media < 3) {
        outSituacao.textContent= Nome + ", você está reprovado(a).";
      } else {
        outSituacao.textContent= Nome + ", você está de recuperação(a).";
      }
    
}
btnMedia.addEventListener("click", calcularmedia);
