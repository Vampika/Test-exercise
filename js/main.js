//Код для выпадающего списка в форме
let button = document.querySelector('.select__button');
let list = document.querySelector('.select__list');
let input = document.querySelector('.select__input');
button.addEventListener('click', () => {
    list.classList.toggle('not-hidden');
    document.querySelector('.select__bird').classList.add('rotate')
});

list.querySelectorAll('.select__item').forEach((item) => {
    item.addEventListener('click', function () {
        document.querySelector('.select__button').innerText = this.innerText;
        input.value=this.dataset.value;
        list.classList.remove('not-hidden');
        document.querySelector('.select__bird').classList.remove('rotate');
})
});


//Модальное окно
let modalWindow = document.querySelector('.modal-background');
document.querySelector('#startStudy').addEventListener('click', () => {modalWindow.classList.add('flex');});
document.querySelector('#modal-close-button').addEventListener('click', () => {modalWindow.classList.remove('flex')});
