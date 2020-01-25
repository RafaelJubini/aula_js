function clicou(){
    document.getElementById("thanks").innerHTML="obrigado por clicar";
}
function clicado(){
    window.open("http://campingdog.com.br");
    window.location.href="http://campingdog.com.br";
}
function trocar(){
    document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
}

function voltar(){
    document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
}
//Quando se usa getElementById, o efeito da função é feito no elemento que possui a id setada.
function trocar(elemento){
    elemento.innerHTML="Obrigado por passar o mouse";
}
function voltar(elemento){
    elemento.innerHTML="Passe o mouse aqui";
}
//Quando se usa a função com variavel setada, o efeito é feito no proprio elemento que chamou a função incrementada de (this), exemplo voltar(this).

/*var d = new Date();
alert(d.getMonth()+1);
*/
/*var fruta = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]; 
//fruta é uma lista de dicionarios, onde o item 0 é maça vermelha, e o item 1 é uva roxa
console.log(fruta);
alert(fruta[1].nome + " " + fruta[1].cor);
//retorna em alert a fruta da posição 1 seguida de espaço e da cor da posição 1
*/

/*var lista = ["maça", "pêra", "laranja", "caja"];

lista.pop(); //retira o ultimo elemento da lista
lista.push("manga"); // adiciona item na lista

console.log(lista.length); //retorna o tamanhoda lista
console.log(lista); // retora a lista
console.log(lista.reverse()) //retorna a lista em ordem reversa
console.log(lista.toLocaleString()) //retorna a lista como uma string
console.log(lista.join(" - ")) //retorna a lista como string com os itens separados pelo elemento entre ""
var nome="Rafael Jubini";
var idade = 34;
var idade2 = 10;
alert("Bem vindo " + nome);
*/



