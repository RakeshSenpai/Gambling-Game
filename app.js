// Steps
// 1. Deposit some money
//2. Determine numbers of line to be bet on
// 3. Collect a bet ammount
// 4. Spin the slot machine
// 5. check if the user won
// 6. Give the user their winnings
// 7. Play again

const prompt = require('prompt-sync')();

const ROWS = 3;
const COLUMNS = 3;
const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8    
}

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}

const diposit = () => {
    while(true){
    const dipositAmount = prompt('Enter your ammount')
    const numberDipositAmount = parseFloat(dipositAmount)
    if(isNaN(numberDipositAmount) || numberDipositAmount <= 0){
        console.log('Please enter valid ammount')
    }else{
        return numberDipositAmount
    }
    }
}

const getNumberOfLine = () => {
    while(true){
    const lines = prompt('Enter the number of line to bet on (1-3 )')
    const numberOfLines = parseFloat(lines)
    if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
        console.log('Invalid number of lines, Please try again')
    }else{
        return numberOfLines
    }
    }
}

function gerBet(balance, lines){
    while(true){
        const bet = prompt('Enter the bet per line:')
        const numberOfBet = parseFloat(bet)
        if(isNaN(numberOfBet) || numberOfBet <= 0 || numberOfBet > balance / lines){
            console.log('invalid bet, Please try again')
        }else{

            return numberOfBet
        }
    }
}

const spin = ()=> {
    const symbols = []
    for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for(let i = 0; i < count ; i++){
            symbols.push(symbol )
        }
    }

    const reels = [[], [], []]
    
    for(let i = 0 ; i < COLUMNS; i++){
        const reelsSymbols = [...symbols]
        for(let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelsSymbols.length)
            const selectedSymbols = reelsSymbols[randomIndex]
            reels[i].push(selectedSymbols)
            reelsSymbols.splice(randomIndex, 1)
        }
    }
    return reels

}
const spinWheel = spin()
console.log(spinWheel)

const balance = diposit()
const numberOfLines = getNumberOfLine()
const bet = gerBet(balance, numberOfLines)
console.log(bet)
