const hideElement = (element) => {
    const homeSection = document.getElementById(element);
    homeSection.classList.add('hidden');
}

function getAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabetString.split('');

    const random = Math.random() * 25;
    const index = Math.floor(random);

    const alphabet = alphabetArray[index];
    return alphabet;
}
function setAlphabet(element,alphabet) {
    const setAlphabetElement = document.getElementById(element);
    setAlphabetElement.innerText = alphabet;
}
function setStyle(element) {
    const setStyleElement = document.getElementById(element);
    console.log(element)
    setStyleElement.classList.add('bg-orange-500');
}
function showElement(element) {
    const showSection = document.getElementById(element);
    showSection.classList.remove('hidden');
}
