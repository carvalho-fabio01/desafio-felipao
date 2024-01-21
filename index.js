// variáveis
let nomeHeroi = "V, o rei do submundo"
let pontosXP = 15000
let nivelHeroi = ""

// laço de repetição
const numeroQuestDiarias = 10
const bonusQuestDiarias = 100

for (let quest = 1; quest <= numeroQuestDiarias; quest++){
    pontosXP += bonusQuestDiarias
}

// estrutura de decisão

if (pontosXP <= 1000) {
    nivelHeroi = "Ferro";
} else if (pontosXP <= 2000) {
    nivelHeroi = "Bronze";
} else if (pontosXP <= 5000) {
    nivelHeroi = "Prata";
} else if (pontosXP <= 7000) {
    nivelHeroi = "Ouro";
} else if (pontosXP <= 8000) {
    nivelHeroi = "Platina";
} else if (pontosXP <= 9000) {
    nivelHeroi = "Ascendente";
} else if (pontosXP <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

// exibir a mensagem com o nome e o nível do herói
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
console.log("Seus pontos de experiência atuais são " + pontosXP)