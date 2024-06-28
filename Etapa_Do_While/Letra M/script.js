/*
Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente
no final o total do somatório e a média dos valores lidos.
*/

document.body.innerHTML += `Bem-vindo! <br>`; 
// Array para armazenar os valores lidos (simulando a leitura dos valores)
let valores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Inicializando com 10 elementos zerados

// Variáveis para armazenar somatório e calcular média
let somatorio = 0;
let media = 0;

// Simulação de leitura dos valores (pode ser substituído por entrada do usuário)
let i = 0;
do {
    valores[i] = parseInt(prompt(`Digite o ${i + 1}º valor:`));
    i++;
} while (i < 10);

// Calculando somatório
i = 0; // Reinicializando o contador
do {
    somatorio += valores[i]; // Somando todos os valores
    i++;
} while (i < 10);

media = somatorio / 10; // Calculando a média

// Exibindo os resultados
document.body.innerHTML += `\nValores digitados: ${valores.join(', ')} <br>`;
document.body.innerHTML += `Total do somatório: ${somatorio} <br>`;
document.body.innerHTML += `Média dos valores: ${media} <br>`;
