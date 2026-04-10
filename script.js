const result = document.querySelector('.result')
const yourScore = document.querySelector('.your-score span')
const machineScore = document.querySelector('.machine-score span')

const playHuman = (humanChoice) => {

    playGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissor']
    const randomNumber = Math.floor(Math.random() * 3)



    return choices[randomNumber]
}

const playGame = (human, machhine) => {

    console.log('Humano: ' + human + ' Maquina: ' + machhine)

    if (human === machhine) {
        result.innerHTML = 'Empate'

    } else if (
        human === 'rock' && machhine === 'scissor' ||
        human === 'scissor' && machhine === 'paper' ||
        human === 'paper' && machhine === 'rock') {
        result.innerHTML = 'Voce Ganhou'
        yourScore.innerHTML = Number(yourScore.innerHTML) + 1
    } else {
        result.innerHTML = 'Maquina Ganhou'
        machineScore.innerHTML = Number(machineScore.innerHTML) + 1
    }

}
