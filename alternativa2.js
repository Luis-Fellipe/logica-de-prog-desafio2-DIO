
let vitorias = 152
let derrotas = 40

let somarPontuacao = calcularPontuacao(vitorias, derrotas)
let rankear = classificarRank(somarPontuacao)

function calcularPontuacao(quantidadeVitorias, quantidadeDerrotas) {
    return quantidadeVitorias - quantidadeDerrotas
}

function classificarRank(pontuacao) {
    let rank
    if (pontuacao <= 10) {
        rank = "Ferro"
    } else if (pontuacao >= 11 && pontuacao <= 20) {
        rank = "Bronze"
    } else if (pontuacao >= 21 && pontuacao <= 50) {
        rank = "Prata"
    } else if (pontuacao >= 51 && pontuacao <= 80) {
        rank = "Ouro"
    } else if (pontuacao >= 81 && pontuacao <= 90) {
        rank = "Diamante"
    } else if (pontuacao >= 91 && pontuacao <= 100) {
        rank = "Lendário"
    } else {
        rank = "Imortal"
    }
    
    console.log(`O Herói tem saldo de ${pontuacao} e está no nível de ${rank}`);
}
