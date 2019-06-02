
let buttons = document.getElementsByClassName('speaker-button');

let ratingList = document.getElementById('rating-list');

let totalSelected = 0;

// Altera cor do botão e insere nome no ranking
for (let i = 0; i < buttons.length; i++) {
    const b = buttons.item(i)
    b.addEventListener('click', () => {
        if (totalSelected < 3) {
            b.classList.add('selected-button');
            let name = document.createElement('p');
            name.textContent = b.textContent;
            ratingList.append(name);
            totalSelected = totalSelected + 1;
        } else {
            alert('You already selected 3 speakers. Cancel your selection or submit it.')
        }
    });
}

// Cancel the selection
let cancelButton = document.getElementById('cancel-button');
cancelButton.addEventListener('click', () => {
    // remove selections
    for (let i = 0; i < buttons.length; i++) {
        const b = buttons[i];
        b.classList.remove('selected-button');
        
    }

    // clear the ranking
    while (ratingList.firstChild) {
        ratingList.removeChild(ratingList.firstChild);
    }
    totalSelected = 0;
});

let submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', () => {
    if (totalSelected == 3) {
        alert('Your ranking has been sent!');
        document.getElementById('rating-options').classList.add('section-hidden');
        document.getElementById('thank-you').classList.remove('section-hidden');
        document.getElementById('thank-you').classList.add('thanks-shown');
    } else {
        alert('You must select 3 speakers.');
    }
});

