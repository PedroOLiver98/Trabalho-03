alert("Bem-vindo!");

// Inicializando a variável para armazenar a soma
let soma = 0;

// Usando um laço for para iterar de 1 a 500
for (let i = 1; i <= 500; i++) {
    // Verificando se o número é par
    if (i % 2 === 0) {
        // Adicionando o número par à soma
        soma += i;
    }
}

// Exibindo o resultado no console
document.body.innerHTML += `<p> O somatório dos valores pares de 1 até 500 é: ${soma} </p>`; 
