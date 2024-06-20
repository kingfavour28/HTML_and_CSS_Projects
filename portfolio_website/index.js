const formMarkUp = document.getElementsByClassName('contact-form')[0];
const openButton = document.getElementById('openFormButton');

function openForm() {
    openButton.style.display = 'none';
    formMarkUp.classList.remove('display-none');
    document.addEventListener('click', outsideClickListener);
}

function outsideClickListener(event) {
    if (!formMarkUp.contains(event.target) && event.target !== openButton) {
        openButton.style.display = 'inline-block';
        formMarkUp.classList.add('display-none');
        document.removeEventListener('click', outsideClickListener);
    }
}

openButton.addEventListener('click', openForm);
