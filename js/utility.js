
// Hide the element by id 'home section'
function hideElementById(element) {
    const elementHide = document.getElementById(element);
    elementHide.classList.add('hidden');
}
// show the element by id 'play ground section
function showElementById(element) {
    const showElement = document.getElementById(element);
    showElement.classList.remove('hidden')
}

// set the random alphabet with index

function randomAlphabet() {
    // create alphabets
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets)

    // genarate the random index for the alphabet
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    // return the alphabet
    return alphabets[index];
}

// set the alphabet on the screen
function setTheAlphabetOnTheScreen(alphabet) {
    const alphabetElement = document.getElementById('set-alphabet');
    alphabetElement.innerText = alphabet;

    // set the backgroun color on the specific alphabet key
    const keyBtn = document.getElementById(alphabet);
    keyBtn.classList.add('bg-orange-500');

}
// remove background color
function removeBackgroundColor(element){
    const removeBackgroundColorElement = document.getElementById(element);
    removeBackgroundColorElement.classList.remove('bg-orange-500');
    
}

// get the key from the keyboard screen 
document.addEventListener('keyup', function(event) {
    // pressed key
    const pressedKey = event.key;
    // expected key
    const expectedKey = document.getElementById('set-alphabet').innerText;
    const expectedText = expectedKey.toLowerCase();
    if(pressedKey === expectedText) {

        // score update
        const  scoreElement = document.getElementById('scoreUp');
        const scoreText = scoreElement.innerText;
        const scoreTextConvartToNumber = parseInt(scoreText);
        const newScore = scoreTextConvartToNumber + 1;
        scoreElement.innerText = newScore;
        // backgroun color remove after key up
        
        // the game will start again
        startGame();
        removeBackgroundColor(expectedText);
    }
    else {
        const lifeElement = document.getElementById('fail');
        const lifeText = lifeElement.innerText;
        const lifeTextConvartToNumber = parseInt(lifeText);
        let newlife = lifeTextConvartToNumber - 1;
        lifeElement.innerText = newlife;
        if(newlife === 0) {
            removeBackgroundColor(expectedText);
            hideElementById('play-ground-section');
            showElementById('score-section');
        
            const finalScoreElement = document.getElementById('final-scroe');
            const scoreElement = document.getElementById('scoreUp');
            const scoreText = scoreElement.innerText;
            const scoreTextConvartToNumber = parseInt(scoreText);
            finalScoreElement.innerText = scoreTextConvartToNumber;
            
            
        }

       
    }
    // removeBackgroundColor(expectedText)
})
