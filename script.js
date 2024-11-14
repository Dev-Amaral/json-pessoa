var requestURL = "https://raw.githubusercontent.com/miqueiassousa/json/refs/heads/main/olamundo.json";

const pessoa = new XMLHttpRequest();

pessoa.open("GET", requestURL, true);
pessoa.responseType = "json";
pessoa.send();

pessoa.onload = function (){
    var dados = pessoa.response;
   // document.write(JSON.stringify(dados,null,2));
    document.write(dados.Json,"<br>");
    document.write(dados.Pessoa[0].Nome,"<br>");
    document.write(dados.Pessoa[0].Idade,"<br>");
    document.write(dados.Pessoa[0].Filhos,"<br>");
    document.write(dados.Pessoa[0].CNH.Numero,"<br>");
    document.write(dados.Pessoa[0].CNH.Tipo[0] ,"<br>");
    document.write(dados.Pessoa[0].CNH.Tipo[1] ,"<br>");
    document.write(dados.Pessoa[0].Familia.Pai ,"<br>");
    document.write(dados.Pessoa[0].Familia.Mãe ,"<br>");
    document.write(dados.Animal[0].Tipo ,"<br>");
    document.write(dados.Animal[0].Nome ,"<br>");

    document.write("<pre>"+JSON.stringify(dados,null,2)+"</pre>")
}