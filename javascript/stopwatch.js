const screen = document.getElementById('screen');
const toggleButton = document.getElementById('button');
let timeInterval;
let stopWatchOn = false;
let seconds = 0;

toggleButton.addEventListener('click', () => {
    stopWatchOn = !stopWatchOn;
    toggleButton.innerHTML = stopWatchOn ? 'STOP' : 'START';
    toggleButton.style.backgroundColor = stopWatchOn ? 'tomato' : 'steelblue';
    
    if (!stopWatchOn) {
        clearInterval(timeInterval);
        seconds = 0;
        screen.innerHTML = '00:00:00';
    } else {
        timeInterval = setInterval(() => {
            seconds++;
            
            const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
            const secs = String(seconds % 60).padStart(2, '0');
            
            screen.innerHTML = `${hours}:${minutes}:${secs}`;
        }, 1000);
    }
});