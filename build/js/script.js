const mediaMobile = window.matchMedia('(max-width: 767px)');
const buttonSections = document.querySelector('.button--sections');
const footerSections = document.querySelector('.footer__list-sections');
const buttonOffice = document.querySelector('.button--office');
const footerOffice = document.querySelector('.footer__list-office');
const modal = document.querySelector('.modal');
const modalCheckbox = document.getElementById('checkboxModal');
const modalLabel = document.querySelector('.modal__checkbox');
const modalPhone = document.getElementById('modalTel');
const modalName = document.getElementById('modalName');
const buttonHeader = document.querySelector('.button--header');
const modalClose = document.querySelector('.button--modal-close');
const modalSubmit = document.querySelector('.button--modal');
const questionForm = document.querySelector('.button--question');
const inputPhone = document.getElementById('phone');
const inputName = document.getElementById('name');
const checkbox = document.getElementById('checkbox');
const checkboxLabel = document.querySelector('.question__checkbox');
const overlay = document.querySelector('.overlay');
const questionInputPhone = document.querySelector('.question__input--phone');
const questionInputName = document.querySelector('.question__input--name');
const modalInputPhone = document.querySelector('.modal__input--phone');
const modalInputName = document.querySelector('.modal__input--name');
const body = document.querySelector('.body');


buttonSections.classList.remove('button--no-js');
buttonOffice.classList.remove('button--no-js');
footerSections.classList.remove('footer__list-sections--show');
footerOffice.classList.remove('footer__list-office--show');
modal.classList.remove('modal--show');


buttonSections.disabled;

if (mediaMobile.matches) {
  buttonSections.enabled;
}else{
  buttonSections.disabled;
}

(function () {
  if(buttonSections){
    buttonSections.classList.remove('button--close');
    buttonSections.addEventListener('click', (evt) => {
      evt.preventDefault();
      if(footerSections){
        footerSections.classList.toggle('footer__list-sections--show');
        footerOffice.classList.remove('footer__list-office--show');
        buttonSections.classList.toggle('button--close');
        buttonOffice.classList.remove('button--close');
      }

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
        footerSections.classList.remove('footer__list-sections--show');
        buttonOffice.classList.toggle('button--close');
        buttonSections.classList.remove('button--close');
      }

    });
  }
})();

(function () {
  if(buttonHeader){
    buttonHeader.addEventListener('click', (evt) => {
      evt.preventDefault();
      if(overlay){
        overlay.classList.toggle('overlay--hidden');
        body.classList.add('body--modal');
        $('input, textarea, a, button').each(function() {
          $(this).attr('tabIndex', '-1');
        });

        $('#modal2 input, #modal2 textarea, #modal2 button').each(function() {
          $(this).removeAttr('tabIndex');
        });
        setTimeout(() => { modalName.focus(); }, 500);
        if(buttonHeader){
          modal.classList.toggle('modal--show');
        }
      }

    });
  }
})();

(function () {
  if (overlay) {
    overlay.addEventListener('click', (evt) => {
      const overlayClose = evt.target;

      if (overlayClose === overlay) {
        modal.classList.toggle('modal--show');
        overlay.classList.toggle('overlay--hidden');
        body.classList.remove('body--modal');
        $('input, textarea, a, button').each(function() {
          $(this).removeAttr('tabIndex', '-1');
        });
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
        body.classList.remove('body--modal');
        $('input, textarea, a, button').each(function() {
          $(this).removeAttr('tabIndex', '-1');
        });
      }
    });
  }
})();

(function () {
  document.addEventListener('keydown', (e) => {
    if(modal.classList.contains('modal--show')) {
      if(e.key === 'Escape'){
        modal.classList.toggle('modal--show');
        overlay.classList.toggle('overlay--hidden');
        body.classList.remove('body--modal');
        $('input, textarea, a, button').each(function() {
          $(this).removeAttr('tabIndex', '-1');
        });
      }
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
            if(inputName.value === ''){
              evt.preventDefault();
              questionInputName.classList.add('question__input--notvalid');
            }else {
              questionInputName.classList.remove('question__input--notvalid');
            }
          }
          if(inputPhone) {
            if (!validatePhone(inputPhone)){
              evt.preventDefault();
              if(inputPhone && inputName){
                questionInputPhone.classList.add('question__input--notvalid');
              }
            }else{
              if(inputPhone && inputName){
                questionInputPhone.classList.remove('question__input--notvalid');
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
            if(modalName.value === ''){
              evt.preventDefault();
              modalInputName.classList.add('modal__input--notvalid');
            }else {
              modalInputName.classList.remove('modal__input--notvalid');
            }
          }
          if(modalPhone) {
            if (!validatePhone(modalPhone)){
              evt.preventDefault();
              if(modalPhone){
                modalInputPhone.classList.add('modal__input--notvalid');
              }
            }else{
              if(modalPhone){
                modalInputPhone.classList.remove('modal__input--notvalid');
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
