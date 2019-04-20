// Desenhar uma escadinha no console, usando console.log();
// Perguntar ao usuário o tamanho da escadinha. Exemplo de escadinha tamanho 5:
// #
// ##
// ###
// ####
// #####
// EXTRA: perguntar ao usuário também qual o caracter (material) para construir a escadinha


// let qtdDegraus = prompt("Quantos degraus você quer?");
// let caractere = prompt("Qual caractere você quer mostrar");
// let texto;
// for (let i = 0; i < qtdDegraus; i++) {
//     texto = caractere;
//     for (let j = 0; j < i; j++) { 
//         texto = texto + caractere;
//     }
//     console.log(texto);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Adivinhe o número.
// Criar um variável com um número entre 0 e 50;
// Criar um prompt para que o usuário tente adivinhar o número.
// Se ele acertou, então dar os parabéns e encerrar.
// Se for um número baixo, responder é maior
// Se for um número alto, responder que é menor.
// extra: Pesquisar código para gerar o número secreto aleatoriamente.


// let numero = Math.floor(Math.random() * (50 + 1));
// let tentativa = prompt("Qual número você acha que é?");

// while(tentativa != numero){
//     console.log(numero);
//     if (tentativa < numero){
//         console.log("É maior");
//         tentativa = prompt("Qual número você acha que é?");
//     } else{
//         console.log("É menor");
//         tentativa = prompt("Qual número você acha que é?");
//     }
// }
// console.log("Você acertou o número é " + numero);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FALTA ESSA 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
- Gerar 5 números aleatórios;
- Concatenar os 5 números em uma string;
Número aleatório: '14590'
- Pedir para o usuário tentar descobrir sua senha (que é o número aleatório)
- Se o usuário digitar um número no local correto, colocar um 'O';
Senha: '14590'
Input: '24607'
Saída: ' O '
- Se o usuário digitar um número que está no local errado, mas existe na string, colocar um '-';
Senha: '14590'
Input: '42607'
Saída: '- '
- Se o usuário digitar um número que está no local errado, e não existe na string, colocar um
'X';
Senha: '14590'
Input: '42507'
Saída: '-xOxx'
- O usuário precisa acertar a senha por completo;
- O usuário tem 10 tentativas de acerto;
*/

// let numeroAleatorio;
// let numeroAleatorioComCincoCaracteres = "";
// for (let index = 0; index < 5; index++) {
//     numeroAleatorio = Math.floor(Math.random() * (9 + 1));
//     numeroAleatorioComCincoCaracteres = numeroAleatorioComCincoCaracteres + numeroAleatorio;
// }
// console.log(numeroAleatorioComCincoCaracteres);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// inverter os caracteres de uma string
// - deve receber um parâmetro
// - usar um laço

// let palavraParaInverter = "Michel";
// let quebrarPalavra = palavraParaInverter.split('');
// let palavraInvertida = '';

// for (let i = quebrarPalavra.length - 1; i >= 0; i--) {
//     palavraInvertida += quebrarPalavra[i];
// }
// console.log(palavraInvertida);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Criar 3 funções
// - A primeira função recebe o nome e o conjunto de notas;
// - A segunda função diz qual é a média do aluno;
// - A terceira função diz se o aluno foi aprovado ou não, considerando que a média é 6 ;

// let nome = prompt("Qual seu nome?");
// let n1 = parseFloat(prompt("Qual foi sua nota 1?"));
// let n2 = parseFloat(prompt("Qual foi sua nota 2?"));
// let n3 = parseFloat(prompt("Qual foi sua nota 3?"));
// let n4 = parseFloat(prompt("Qual foi sua nota 4?"));

// let media = (n1+n2+n3+n4)/4;
// alert(nome + " sua média é: " + media);

// if(media > 6){
//     alert("Parabéns, você foi aprovado!");
// } else {
//     alert("Você reprovou por insuficiência de nota.")
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Criar um programa que avalia uma proposta de empréstimo.
// O programa recebe: idade do cliente, quanto dinheiro ele quer emprestar, quanto ele ganha
// por mês.
// REGRAS para aceita o empréstimo:
// - Entre 22 e 55 anos;
// - Valor a partir de 1000 reais;
// - Valor não pode ultrapassar 15x o que ele recebe
// RESPONDER: ACEITO OU NÃO ACEITO
// EXTRA:
// - Perguntar também a quantidade de parcelas (3 a 20 vezes) e calcular juros de 8% ao mês
// (COMPOSTO)
// RESPONDER VALOR TOTAL DO EMPRESTIMO E VALOR Da PARCELA.

// let nome = prompt("Qual seu nome?");
// let idade = prompt("Qual sua idade?");
// let renda = prompt("Qual sua renda mensal?");
// let valEmprestimo = parseFloat(prompt("Valor do empréstimo"));

// if(idade >= 22 && idade <= 55 && valEmprestimo >= 1000 && valEmprestimo <= 15*renda){
//     alert("Empéstimo aceito!");
//     let qtdParcelas = prompt("Em quantas parcelas você deseja pagar? (3 a 20)");
//     if(qtdParcelas >= 3 && qtdParcelas <= 20){
//         let valComJuros = valEmprestimo;
//         for (let i = qtdParcelas; i > 0; i--) {
//             valComJuros += (valComJuros * 0.08);
//         }
//         alert("Valor do empréstimo: " + valEmprestimo + ". Valor total com o juros calculado: " + valComJuros.toFixed(2) + ", com " + qtdParcelas +" parcelas de: " + (valComJuros/qtdParcelas).toFixed(2) + ".");
//     } else {
//         alert("Quantidade de parcelas inválidas! Reinicie o processo!");
//     }
// }else{
//     alert("Empréstimo não aceito");
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Crie duas listas no seu script, uma de 5 meninos e uma de 5 meninas
// ex:
// Como as festas juninas estão chegando, os meninos e meninas vão formar duplas para
// dançar quadrilha.

// Use o console.log para mostrar no console TODAS as duplas possíveis entre meninos e
// meninas.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let meninos = ["João", "Cleber", "Astolfo", "Ross", "Bran"];
// let meninas = ["Maria", "Cleuza", "Asmélia", "Rachel", "Arya"];

// for (let i in meninos) {
//     for (let j in meninas) {
//         console.log(meninos[i] + " e " + meninas[j]);
//     }
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Usar janelinhas de prompt para cadastrar um usuário, com nome, login, senha, data de
// nascimento,
// premium (booleano- dica usar confirm ao inves de prompt). Salvar esses dados em um objeto
// e imprimir
// no console.
// EXTRA:
// exibir também no console a idade do usuário no dia 08/03! Calculada a partir da data de
// nascimento.

let usuarios = [
    {nome: "michel", login: "chelwillians", senha: "123", dataNasc: "14/07/1998", premium: true}
];

let nome = prompt("Nome");
let login = prompt("Login");
let senha = prompt("Senha");
let dataNasc = prompt("Data de Nascimento (dd/mm/aaaa)");
let premium = confirm("Usuário Premium?");

usuarios.push({nome: nome, login: senha, senha: senha, dataNasc: dataNasc, premium: premium});

console.log(usuarios[usuarios.length - 1]);