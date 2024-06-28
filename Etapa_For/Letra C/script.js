/* Apresentar o total da soma obtida dos cem primeiros números inteiros
(1+2+3+4+5+6+7+...97+98+99+100).
*/
document.body.innerHTML += `Bem-vindo! <br>`; 

// Inicializando a variável para armazenar a soma
let soma = 0;

// Usando um laço for para somar os números de 1 a 100
for (let i = 1; i <= 100; i++) {
    soma += i ;
}

// Exibindo o resultado
document.body.innerHTML += ` A soma dos cem primeiros números inteiros é: ${soma} <br>`;

