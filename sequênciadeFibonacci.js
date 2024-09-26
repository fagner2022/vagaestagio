function pertenceFibonacci(numero) {
    // Inicializando a sequência de Fibonacci
    let a = 0, b = 1;
    
    // Se o número for 0, ele pertence à sequência
    if (numero === 0) {
        return `${numero} pertence à sequência de Fibonacci.`;
    }
    
    // Gerando a sequência e verificando a presença do número
    while (b <= numero) {
        if (b === numero) {
            return `${numero} pertence à sequência de Fibonacci.`;
        }
        const proximo = a + b; // Próximo número da sequência
        a = b; // Atualiza a para o próximo número
        b = proximo; // Atualiza b para o próximo número
    }
    
    return `${numero} não pertence à sequência de Fibonacci.`;
}

// Exemplo de uso
const numeroInformado = 23; // Substitua pelo número desejado
const resultado = pertenceFibonacci(numeroInformado);
console.log(resultado);
