
function calcularPontuacao(quantidadeVitorias = 0, quantidadeDerrotas = 0) {
    let somaDePontos = quantidadeVitorias - quantidadeDerrotas
    let rank

    if (somaDePontos <= 10) {
        rank = "Ferro"
    } else if (somaDePontos >= 11 && somaDePontos <= 20) {
        rank = "Bronze"
    } else if (somaDePontos >= 21 && somaDePontos <= 50) {
        rank = "Prata"
    } else if (somaDePontos >= 51 && somaDePontos <= 80) {
        rank = "Ouro"
    } else if (somaDePontos >= 81 && somaDePontos <= 90) {
        rank = "Diamante"
    } else if (somaDePontos >= 91 && somaDePontos <= 100) {
        rank = "Lendário"
    } else {
        rank = "Imortal"
    }
    
    console.log(`O Herói tem saldo de ${somaDePontos} e está no nível de ${rank}`);
    
}

calcularPontuacao(111, 5)
