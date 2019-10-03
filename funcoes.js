function adicionarItem() {
   var tabela = document.getElementById("lista_tabela");
   var linha = tabela.insertRow(-1);
   linha.classList.add("row");

   var coluna_produto = linha.insertCell(0);
   coluna_produto.innerHTML = "<input type=\"text\" maxlength=\"50\">";

   var coluna_udm = linha.insertCell(1);
   coluna_udm.innerHTML = "<input type=\"text\" maxlength=\"50\">";

   var coluna_quantidade = linha.insertCell(2);
   coluna_quantidade.innerHTML = "<input type=\"number\" min=\"1\">";

   var coluna_comentario = linha.insertCell(3);
   coluna_comentario.innerHTML = "<input type=\"text\" maxlength=\"50\">";
}

function limparLista() {
   var tabela = document.getElementById("lista_tabela");
   var l = 1;

   while(linha = tabela.rows[l++]) {
      linha.cells[2].getElementsByTagName("input")[0].value = null;
      linha.cells[3].getElementsByTagName("input")[0].value = null;
   }
}

function enviarLista() {
   var tabela = document.getElementById("lista_tabela");
   var preenchido = false;
   var texto = "";
   var l = 1;

   texto = texto.concat("Lista de Compras *Liquori*\n");
   texto = texto.concat("Enviado em " + (new Date()).toLocaleString() + "\n");
   texto = texto.concat("-------------------------------------\n");

   while(linha = tabela.rows[l++]) {
      if(linha.cells[2].getElementsByTagName("input")[0].value.length > 0) {
         preenchido = true;
         if (linha.cells[0].innerText.length > 0) {
            texto = texto.concat(linha.cells[0].innerText + " - ");
         } else {
            texto = texto.concat(linha.cells[0].getElementsByTagName("input")[0].value + " - ");
         }
         texto = texto.concat(linha.cells[2].getElementsByTagName("input")[0].value + " ");
         if (linha.cells[1].innerText.length > 0) {
            texto = texto.concat(linha.cells[1].innerText);
         } else {
            texto = texto.concat(linha.cells[1].getElementsByTagName("input")[0].value);
         }
         if (linha.cells[2].getElementsByTagName("input")[0].value > 1) {
            texto = texto.concat(linha.cells[1].innerText + "s");
         }
         if (linha.cells[3].getElementsByTagName("input")[0].value.length != 0) {
            texto = texto.concat(" (" + linha.cells[3].getElementsByTagName("input")[0].value + ")");
         }
         texto = texto.concat("\n");
      }
   }
   texto = texto.concat("-------------------------------------");

   if (preenchido) {
      window.location.href = "https://api.whatsapp.com/send?phone=" + "5541992790911" + "&text=" + window.encodeURIComponent(texto);
   } else {
      window.alert("Lista vazia!");
   }
}
