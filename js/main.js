
let secretPoint = document.getElementById('easter-egg');
let modalPromo = document.getElementById('modal-promo');
let closeButton = document.getElementsByClassName('close')[0];
let modalInput = document.getElementById('modal-input');
const bonusCode = 39887;

// Exibe o modal ao clicar no ponto secreto
secretPoint.addEventListener('click', () => {
    modalPromo.classList.remove('modal-hidden');
    modalPromo.classList.add('modal-shown');
});

// Oculta modal ao clicar no botão fechar
closeButton.addEventListener('click', () => {
    modalPromo.classList.remove('modal-shown');
    modalPromo.classList.add('modal-hidden');
});

// Valida o código inserido no modal
modalInput.addEventListener('keyup', event => {
    const code = event.target.value;

    if (code == bonusCode) {
        alert('You won the prize! Report to Tim at the front desk with your code and receive it.');
    } else if(code != bonusCode && event.target.value.length >= 5) {
        alert('Sorry, but your code is not valid.');
        modalInput.value = '';
    }
});