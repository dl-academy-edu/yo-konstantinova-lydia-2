var popup = document.querySelector('.feedback-wrap')
var popupBtn = document.querySelector('.btn-js')
var closeBtn = document.querySelector('.feedback-wrap__close-btn')
var submit = document.querySelector('.form-button');
var checkbox = document.querySelector('.form-checkbox')


popupBtn.addEventListener('click', function() {
    popup.classList.add('feedback-wrap_open')
})

closeBtn.addEventListener('click', function() {
    popup.classList.remove('feedback-wrap_open')
})

window.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && popup.classList.contains('feedback-wrap_open')) {
        popup.classList.remove('feedback-wrap_open')
    }
})

checkbox.addEventListener('click', function () {
  if (checkbox.checked) {
    submit.removeAttribute('disabled', 'disabled');
  } 
  else {
    submit.setAttribute('disabled', 'disabled');
  }
});
