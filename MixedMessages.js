//Project scope: Build program to generate mixed messages with 4 variables to be included


//project requires 4 variable to assign to final message, object below reflects this
const fantasyVariables = {
    mood: ['guilty', 'excited', 'heart broken', 'juicy', 'slick', 'run of the mill'],
    creature: ['Wizard', 'High Elf', 'Gnome', 'NPC', 'Sound Guy', 'Aspriring Dark Lord'],
    landFrom: ['Albaratata', 'the Mountain Home', 'Sky City', 'another planet', 'a pocket dimention', 'a long long since forgotten'],
    treasure: ['a coinpurse who took you last shilling', 'a magical dagger that will allow you to finally end your pained existence', 
                'a bag of nuts', 'your family', 'a way to leave this cursed realm', 'the golden shores of Whachacha']
}

//this will collate the final message to be logged to console
let finalMessage = []

//function to generate random number
function getRandomNumber(number) {
    //generates random number between 0 and number - 1, allows for assignment to various array lengths
    return Math.floor(Math.random() * number)
}


for (let item in fantasyVariables){
    let newItemIndex = getRandomNumber(fantasyVariables[item].length)

    switch(item) {
        case 'mood':
            finalMessage.push(`You are a ${fantasyVariables.mood[newItemIndex]} `)
            break
        case 'creature':
            finalMessage.push(`${fantasyVariables.creature[newItemIndex]} `)
            break
        case 'landFrom':
            finalMessage.push(`and you hail from ${fantasyVariables.landFrom[newItemIndex]}, `)
            break
        case 'treasure':
            finalMessage.push(`you are searching for ${fantasyVariables.treasure[newItemIndex]}. \nGood Luck in your quest.`)
            break
        default:
            finalMessage.push(`SOMETHING WENT WRONG, ABANDON QUEST`)
    }
}

function concatFinalMessage(message) {
    const characterIntro = finalMessage.join('')
    console.log(characterIntro)
}

concatFinalMessage(finalMessage)