const footballTeam = [
    { nome: "Atlético Mineiro", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Palmeiras", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Flamengo", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Corinthians", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Fortaleza", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Red Bull Bragantino", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Internacional", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Fluminense", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Cuiabá", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Ceará", puntiFatti: 0, falliSubiti: 0 },
    { nome: "América Mineiro", puntiFatti: 0, falliSubiti: 0 },
    { nome: "São Paulo", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Athletico Paranaense", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Atlético Goianiense", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Santos", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Sport Recife", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Bahia", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Grêmio", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Juventude", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Chapecoense", puntiFatti: 0, falliSubiti: 0 }
];

let nameAndFoul = []

footballTeam.forEach((team, i) => {
    team.puntiFatti = getRandomInt(1, 10)
    team.falliSubiti = getRandomInt(1, 10)
    const { nome, falliSubiti } = team
    nameAndFoul.push(nome, falliSubiti)
})

console.log(nameAndFoul)





function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

