
// now play the game by clicked
function playGame() {
    hideElementById('home-section');
    hideElementById('score-section');
    addInnerText('fail', 5)
    addInnerText('scoreUp', 0)
    showElementById('play-ground-section');
    startGame();
}
function addInnerText(element, value) {
    const addElement = document.getElementById(element);
    addElement.innerText = value
}
// play the game on the play ground section
function startGame() {
    const alphabet =  randomAlphabet()
    setTheAlphabetOnTheScreen(alphabet);
}
