
let secretPoint = document.getElementById('easter-egg');
console.log(secretPoint);

let modalInput = document.getElementById('modal-promo');
console.log(modalInput);

let closeButton = document.getElementsByClassName('close')[0];
console.log(closeButton);

// secretPoint.onclick = function() {
//     if (modalInput.className === 'modal-hidden') {
//         modalInput.className = 'modal-shown';
//     } else {
//        modalInput.className = 'modal-hidden';
//     }
// }

// Exibe o modal ao clicar no ponto secreto
secretPoint.addEventListener('click', () => {
    modalInput.classList.remove('modal-hidden');
    modalInput.classList.add('modal-shown');
});

// Oculta modal ao clicar no botão fechar
closeButton.addEventListener('click', () => {
    modalInput.classList.remove('modal-shown');
    modalInput.classList.add('modal-hidden');
});

