const mediaMobile = window.matchMedia('(max-width: 767px)');
const buttonRazdel = document.querySelector('.button--razdel');
const footerRazdel = document.querySelector('.footer__list-razdel');
const buttonOffice = document.querySelector('.button--office');
const footerOffice = document.querySelector('.footer__list-office');
const modal = document.querySelector('.modal');
const modalCheckbox = document.querySelector('.modal__checkbox-input');
const modalLabel = document.querySelector('.modal__checkbox');
const modalPhone = document.querySelector('.modal__input--phone');
const modalName = document.querySelector('.modal__input--name');
const buttonHeader = document.querySelector('.button--header');
const modalClose = document.querySelector('.button--modal-close');
const modalSubmit = document.querySelector('.button--modal');
const questionForm = document.querySelector('.button--question');
const inputPhone = document.querySelector('.question__input--phone');
const inputName = document.querySelector('.question__input--name');
const checkbox = document.querySelector('.question__checkbox-input');
const checkboxLabel = document.querySelector('.question__checkbox');
const overlay = document.querySelector('.overlay');

let isStorageSupport = true;
let storage = "";
try {
	storage = localStorage.getItem("name");
	storage = localStorage.getItem("phone");
  storage = localStorage.getItem("checkbox");
	storage = localStorage.getItem("modalName");
  storage = localStorage.getItem("modalTel");
	storage = localStorage.getItem("checkboxModal");
} catch (err) {
	isStorageSupport = false;
}


buttonRazdel.classList.remove('button--no-js');
buttonOffice.classList.remove('button--no-js');
footerRazdel.classList.remove('footer__list-razdel--show');
footerOffice.classList.remove('footer__list-office--show');
modal.classList.remove('modal--show');


buttonRazdel.disabled;

if (mediaMobile.matches) {
  buttonRazdel.enabled;
  console.log(buttonRazdel);
}else{
  buttonRazdel.disabled;
  console.log(buttonRazdel);
}

(function () {
    if(buttonRazdel){
      buttonRazdel.classList.remove('button--close');
      buttonRazdel.addEventListener('click', (evt) => {
        evt.preventDefault();
        if(footerRazdel){
          footerRazdel.classList.toggle('footer__list-razdel--show');
        }
        buttonRazdel.classList.toggle('button--close');
      });
    }
  })();

(function () {
  if(buttonOffice){
    buttonOffice.classList.remove('button--close');
    buttonOffice.addEventListener('click', (evt) => {
      evt.preventDefault();
      if(buttonOffice){
        footerOffice.classList.toggle('footer__list-office--show');
      }
      buttonOffice.classList.toggle('button--close');
    });
  }
})();

(function () {
  if(buttonHeader){
    buttonHeader.addEventListener('click', (evt) => {
      evt.preventDefault();
      if(overlay){
        overlay.classList.toggle('overlay--hidden');
        if(buttonHeader){
          modal.classList.toggle('modal--show');
        }
      }
    });
  }
})();

(function () {
  if (overlay) {
    overlay.addEventListener('click', function (evt) {
      let overlayClose = evt.target;

      if (overlayClose === overlay) {
        modal.classList.toggle('modal--show');
        overlay.classList.toggle('overlay--hidden');
      }

    });
  }
})();

(function () {
  if(modalClose){
    modalClose.addEventListener('click', (evt) => {
      evt.preventDefault();
      if(modalClose){
        modal.classList.toggle('modal--show');
        overlay.classList.toggle('overlay--hidden');
      }
    });
  }
})();

(function () {
  document.addEventListener('keypress', function (e) {
    if(e.key === 'Escape'){
      modal.classList.toggle('modal--show');
      overlay.classList.toggle('overlay--hidden');
    }
  });
})();


(function () {
  function validatePhone(inp){
    const regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    return regex.test(inp.value);
  }

  if(questionForm){
    questionForm.addEventListener('click', (evt) => {
      if(checkbox){
        if(!checkbox.checked){
          evt.preventDefault();
          checkboxLabel.classList.toggle('question__checkbox--notvalid');
        }else{
          if(inputName){
            if(inputName.value == ''){
              evt.preventDefault();
              inputName.classList.add('question__input--notvalid');
            }else {
              inputName.classList.remove('question__input--notvalid');
            }
          }
          if(inputPhone) {
            if (!validatePhone(inputPhone)){
              evt.preventDefault();
              if(inputPhone && inputName){
                inputPhone.classList.add('question__input--notvalid');
              }
            }else{
              if(inputPhone && inputName){
                inputPhone.classList.remove('question__input--notvalid');
                checkboxLabel.classList.toggle('question__checkbox--notvalid');
              }
            }
          }
        }
      }
    });
  }
})();

(function () {
  function validatePhone(inp){
    const regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    return regex.test(inp.value);
  }

  if(modalSubmit){
    modalSubmit.addEventListener('click', (evt) => {
      if(modalCheckbox){
        if(!modalCheckbox.checked){
          evt.preventDefault();
          modalLabel.classList.toggle('modal__checkbox--notvalid');
        }else{
          if(modalName){
            if(modalName.value == ''){
              evt.preventDefault();
              modalName.classList.add('modal__input--notvalid');
            }else {
              modalName.classList.remove('modal__input--notvalid');
            }
          }
          if(modalPhone) {
            if (!validatePhone(modalPhone)){
              evt.preventDefault();
              if(modalPhone){
                modalPhone.classList.add('modal__input--notvalid');
              }
            }else{
              if(modalPhone){
                modalPhone.classList.remove('modal__input--notvalid');
                modalLabel.classList.toggle('modal__checkbox--notvalid');
              }
            }
          }
        }
      }
    });
  }
})();

// не нашел лучшего варианта прокрутки к якорю

(function () {
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (t) {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      let e = $(this.hash);
      e = e.length ? e : $(`[name=${  this.hash.slice(1)  }]`), e.length && (t.preventDefault(), $('html, body').animate({
        scrollTop: e.offset().top,
      }, 600, () => {
        const et = $(e);
        if (et.focus(), et.is(':focus')) {return !1;}
        et.attr('tabindex', '-1'), et.focus();
      }));
    }
  });
})();
