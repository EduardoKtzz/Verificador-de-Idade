function verificar() {
   // função
   var data = new Date(); //data atual
   var ano = data.getFullYear(); //ano atual
   var fano = document.getElementById("txtano"); // ano digitado pelo usuario
   var res = document.querySelector("div#res"); // transformar res em variavel.
   if (fano.value.length == 0 || Number(fano.value) > ano) {
      //Para uma string vazia, length é 0. Se o valor digitado pelo usuario(fano)transformado em number(Number) for maior que o ano atual.

      window.alert("[ERROR] Digite outro número e tente novamente");
   } else {
      var fsex = document.getElementsByName("radsex"); //existe a opção [0] e [1].

      var idade = ano - Number(fano.value); //ano atual menos ano digitado pelo usuario.

      var genero = ""; // string vazia

      var img = document.createElement("img");

      img.setAttribute("id", "foto"); //igual criar no html  a tag <img id = "foto">.

      if (fsex[0].checked) {
         genero = "Homem";

         if (idade >= 0 && idade < 15) {
            // a criançinha

            img.setAttribute("src", "./public/assets/foto_crianca_homem.jpg");
            document.body.style.background = `#FF665A`;
         } else if (idade < 19) {
            // o jovem

            img.setAttribute("src", "./public/assets/foto_jovem_homem.jpg");
            document.body.style.background = `#705E78`;
         } else if (idade < 50) {
            // o adulto

            img.setAttribute("src", "./public/assets/foto_adulto_homem.jpg");
            document.body.style.background = `#FFF587`;
         } else {
            // idoso
            img.setAttribute("src", "./public/assets/foto_idoso_homem.jpg");
            document.body.style.background = `#A3A1A8`;
         }
      } else if (fsex[1].checked) {
         genero = "Mulher";

         if (idade >= 0 && idade < 15) {
            // a  criança

            img.setAttribute("src", "./public/assets/foto_crianca_mulher.jpg");
            document.body.style.background = `#FF8C64`;
         } else if (idade < 19) {
            // a jovem

            img.setAttribute("src", "./public/assets/foto_jovem_mulher.jpg");
            document.body.style.background = `#A5AAA3`;
         } else if (idade < 50) {
            // a adulta

            img.setAttribute("src", "./public/assets/foto_adulto_mulher.jpg");
            document.body.style.background = `#812F33`;
         } else {
            //idosozinha

            img.setAttribute("src", "./public/assets/foto_idoso_mulher.jpg");
            document.body.style.background = `#FEA443`;
         }
      }

      res.style.textAlign = "center"; // colocado estilo diretamente.

      res.innerHTML = `${genero} com ${idade} anos!`;

      res.appendChild(img);
   }
}
