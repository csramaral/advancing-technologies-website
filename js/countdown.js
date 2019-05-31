let timer = document.getElementById('timer');
let finalDate = new Date('2019-10-11 10:00').getTime();

window.setInterval(() => {
    
    currentDate = new Date().getTime();
    remainingTime = finalDate - currentDate;

    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    
    timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);