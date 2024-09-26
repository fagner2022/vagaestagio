function contarA(string) {
    // Converte a string para minúsculas para facilitar a contagem
    const stringLower = string.toLowerCase();
    
    // Usamos uma expressão regular para contar as ocorrências de 'a'
    const regex = /a/g; // RegEx para encontrar todas as ocorrências de 'a'
    const matches = stringLower.match(regex); // Procura todas as ocorrências
    
    // Verifica se foram encontradas letras 'a'
    const quantidade = matches ? matches.length : 0;

    // Verifica a existência
    if (quantidade > 0) {
        return `A letra 'a' existe na string e aparece ${quantidade} vez(es).`;
    } else {
        return "A letra 'a' não existe na string.";
    }
}

// Exemplo de uso
const texto = "A árvore estava cheia de frutas.";
const resultado = contarA(texto);
console.log(resultado);
