const successBtn = document.querySelector('.success')
const warningBtn = document.querySelector('.warning')
const errorBtn = document.querySelector('.error')
const box = document.getElementById('toasts')

successBtn.addEventListener('click', function () {
    var html = `
    <div class="toast success">
        <i class="fas fa-check-circle"></i>
        <span class="msg">This is a success message !</span>
        <span class="countdown"></span>
    </div>
    `
    box.insertAdjacentHTML('beforeend',html)
    setTime()
})
warningBtn.addEventListener('click', function () {
    var html = `
    <div class="toast warning">
        <i class="fas fa-exclamation-circle"></i>
        <span class="msg">This is a warning message !</span>
        <span class="countdown"></span>
    </div>
    `
    box.insertAdjacentHTML('beforeend',html)
    setTime()
})
errorBtn.addEventListener('click', function () {
    var html = `
    <div class="toast error">
        <i class="fas fa-exclamation-triangle" ></i>
        <span class="msg">This is a error message !</span>
        <span class="countdown"></span>
    </div>
    `
    box.insertAdjacentHTML('beforeend',html)
    setTime()
})
function setTime() {
    var sign = document.querySelectorAll('.toast')
    sign.forEach((item) => {
        setTimeout(function () {
            item.style.animation = 'hide_slide 1s ease forwards';
        },4000)
        setTimeout(function () {
            item.remove();
        },6000)
    })
}
    

    