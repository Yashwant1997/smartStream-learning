
const modal=document.querySelector('.modal');

const overlay=document.querySelector('.overlay');

const btnCloseModal=document.querySelector('.close-modal');

const btnShowModal=document.querySelectorAll('.show-modal');

// console.log(btnShowModal);

openModel= function () {
    // console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnShowModal.length; i++) {
    // console.log(btnShowModal[i].textContent);
    btnShowModal[i].addEventListener('click', openModel )
}

const closeModel= function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click',closeModel )  // not closeModel() bcz we dont call function we just declare/define. when we run code it will call but we want when we click on button not every time

overlay.addEventListener('click', closeModel)

document.addEventListener('keydown', function(e) {
    console.log(e.key); 

    if (e.key=== 'Escape' && !modal.classList.hidden) {
         closeModel();
         console.log('hidden class added to close');
    }
})