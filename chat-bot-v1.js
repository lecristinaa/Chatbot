// O que é futebol?
export const palavrasFutebol = {
    probablyWords: [
    "que", "futebol",
    "q", "é", "e",
    "me", "explica",
    "sabe", "dizer", "o",
    ],
    matched: 0,
}

// Quais as regras do futebol?
export const palavrasRegras = {
    probablyWords: [
    "quais", "as", "regras", "do", "futebol",
    "sao", "como", "funciona",
    ],
    matched: 0,
}

// Que time ele mais gosta?
export const palavrasTimeGosta = {
    probablyWords: [
    "que", "mais", "gosta",
    "qual", "você", "torce",
    "preferido", "clube", "coração",
    "do", "time",
    ],
    matched: 0,
}

// Palmeiras tem mundial?
export const palavrasMundialPalmeiras = {
    probablyWords: [
    "palmeiras", "tem", "mundial",
    "copa", "do", "mundo",
    "campeão", "rio", "copa rio"
    ],
    matched: 0,
}

// Palavras que não tem haver com futebol
export const papoFurado = {
    probablyWords: [
        "filme", "basquete", "unha",
        "teclado", "vôlei", "natação",
        "atletismo", "esgrima",
    ],
    matched: 0,
}


function showAnswer(index) {
    switch (index) {
        case 0:
            return "O futebol é o esporte mais conhecido do mundo e mais difundido em todos os países, sendo o Brazil e a Europa os maiores!"
        case 1:
            return "Algumas regras do futebol seria: não pode agressão, não pode gol contra"
        case 2:
            return "Eu gosto do tigre"
        case 3:
            return "O palmeiras não tem mundial, mas tem copa RIO, mas eles falam que tem né, fazer oq"
        default:
            return "Só sei falar de futebol meu amigo, se não for isso, tchau"
    }
}

// Função para saber qual, provavelmente, foi a pergunta feita
export function mostProbablyQuestion() {
    let matches = [
        palavrasFutebol.matched, 
        palavrasRegras.matched, 
        palavrasTimeGosta.matched,
        palavrasMundialPalmeiras.matched, 
        papoFurado.matched,
    ]

    console.log(matches)
    console.log(Math.max(...matches))
    console.log(matches.indexOf(Math.max(...matches)))
    // Vê quantas palavras de cada pergunta foi usada
    return showAnswer(matches.indexOf(Math.max(...matches)))
}
