function startGame(){
    var messageElement = document.getElementById('messages');
    messageElement!.innerText = 'Welcome';
}

document.getElementById('startGame')!.addEventListener('click', startGame);