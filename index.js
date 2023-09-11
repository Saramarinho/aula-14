//1-Exercícios de interpretação de código!
/*a) Primeiro se cria um objeto pessoa, com todas as propriedades dessa pessoa, como: seu nome, sua idade e se tem carteira de motorista.
Depois vem uma condição dizendo se a idade da pessoa é maior ou igual a 18 anos e se ela tem carteira de motorista, se sim imprimi na tela "Alice pode dirigir!",
 se não, imprimi na tela "Alice não pode dirigir!".

b) A mensagem "Alice pode dirigir!" só irá ser impressa na tela se for usada na condição if ou seja quando a condição for verdadeira.
E a mensagem "Alice não pode dirigir!", só vai ser impressa na tela se for usada na condição else, ou seja quando a condição for falsa.

2- a)Primeiro se cria um objeto chamado animal, onde se tem duas propriedades, uma sendo o nome do animal e outra sendo uma caracteristica do animal, 
dizendo que ele é carnívoro. Logo após se cria uma condição dizendo, que se o objeto animal por nome de Leão, for carnívoro, imprimi na tela
"Leão é um animal carnívoro", se o animal Leão não for carnívoro, imprimi na tela "Leão não é um animal carnívoro".

b) "Leão é um animal carnívoro".
   "Leão não é um animal carnívoro".

3- a)Primeiro se cria uma variável chamada número que carrega o valor 10. Depois vêm a condição (if)
dizendo que se o número 10 for maior que 5, imprimi na tela "O número é maior do que 5", se não for maior que cinco
imprimi na tela "O número é menor ou igual a 5". Na outra condição ele diz que se o número 10 dividido por dois der resto 0,
imprimi na tela "O número é par", se não for par, por não ter resto 0, imprimi na tela "O numero é ímpar".

b) "O número é maior do que 5."
   "O número é par."


let idadeU = Number(prompt("Qual a sua idade?"));
  if (idadeU >= 18) {
    console.log("Você é maior de idade!");
  } else {
    console.log("Você é menor de idade!");
  }

  let turno = prompt("Qual turno do dia você estuda manhã, tarde ou noite?");
  if (turno === "manhã") {
    console.log("Bom dia!")
  } else if (turno === "tarde") {
    console.log("Boa tarde")
  }
  else{
    console.log("Boa noite");
  }
  

    let turno = prompt("Qual turno do dia você estuda manhã, tarde ou noite?")
    switch (turno) {
        case "manhã":
            console.log("Bom dia!")
            break
            case "tarde":
                console.log("Boa tarde!")
                break
                case "noite":
                    console.log("Boa noite!")
                    break
                    default:
                    console.log("Turno não encontrado!")
                    break;
    }
  

let aluno = {
    nome: "Eduardo",
    idade: 19,
    tipoDeCurso: "Eletromecânica",
    temBolsa: true
}
 if (aluno.idade < 30) {
    if(!aluno.temBolsa){
        if(aluno.tipoDeCurso === "Estar matriculado em um curso de graduação?")
console.log("Você pode se candidatar a uma bolsa de estudos!")
    } else{
        console.log("Desculpe, você não atende aos requisitos para a bolsa!")
        
    }

 }
 */
let produto = {
nome: "Bolsa",
preço: 120,
desconto: 20,
freteGratis: true
}
let precoComDesconto = ((produto.preço * produto.desconto) /100);
if (produto.freteGratis){
    if(produto.desconto > 0){
        return "preço final com desconto e frete gratis "
    }
    else{ return "preço final sem desconto e frete gratis"}
}else{
    if(produto.desconto >0){
        return "preco final Com desconto sem frete"
    }else{ return "preço final sem desconto e sem preço"

    }
}

Essa ultima certeza que não está certa! pelo menos o resto consegui!
