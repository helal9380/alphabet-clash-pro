document.getElementById('play-now-btn').addEventListener('click', function() {
    const playNowHome = document.getElementById('play-now-home');
    playNowHome.classList.add('hidden')

    const playGround = document.getElementById('play-ground-section');
    playGround.classList.remove('hidden');

    const alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabet = alphabetString.split('');

    const rendomNumber = Math.random() * 25;
    const random = Math.floor(rendomNumber);
    const alphabetIndex = alphabet[random];
    
    document.getElementById('set-alphabet').innerText = alphabetIndex;
    
})