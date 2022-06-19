const fullWidth = document.getElementById('#column1');

const iElement = document.querySelector('.fa');

function full(){
    fullWidth.style.width = '50%';
};

iElement.addEventListener('click', full());