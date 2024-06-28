/* Elaborar um programa que apresente no final o somatório dos valores pares
existentes na faixa de 1 até 500.
*/
document.body.innerHTML += `Bem-vindo! <br>`;

// Inicializando a variável para armazenar a soma
let soma = 0;

// Usando um laço for de repetição de 1 a 500
for (let i = 1; i <= 500; i++) {
    // Verificando se o número é par
    if (i % 2 === 0) {
        // Adicionando o número par à soma
        soma += i;
    }
}

// Exibindo o resultado no console
document.body.innerHTML += `O somatório dos valores pares de 1 até 500 é: ${soma} <br>`; 
