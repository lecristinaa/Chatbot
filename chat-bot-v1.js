import { palavrasFutebol, palavrasMundialPalmeiras, palavrasRegras, palavrasTimeGosta, papoFurado, mostProbablyQuestion } from './can-i-answer.js'
// O que ele vai poder responder?
// - O que é futebol?
// - Quais as regras do futebol?
// - Que time ele mais gosta?
// - Palmeiras tem mundial?
// - PAPO FURADO?

// Separe a frase em uma array de palavras
let pergunta = "Basquete pode ser considerado um esporte ?"
pergunta = pergunta.toLowerCase()
pergunta = pergunta.split(' ')
// Tirar da pergunta o "?"
pergunta = pergunta.slice(0, 6)


const bancos = [
    palavrasFutebol,
    palavrasMundialPalmeiras,
    palavrasRegras,
    palavrasTimeGosta,
    papoFurado,
]



// Ande pela array de palavras
  // Veja se a palavra existe no banco X, 
  // senão, veja no Y, 
  // senão, veja no Z...TEM NO Z? tensione (aumente o matched em 1)

// Cada volta representa um elemento da array
for (let i = 0; i < pergunta.length; i++) { // Palavra i
    for (let j = 0; j < bancos.length; j++) { // Procura a palavra i, no banco j
        if (bancos[j].probablyWords.indexOf(pergunta[i]) !== -1) {
            bancos[j].matched++
        }
    }
}

console.log(mostProbablyQuestion())
