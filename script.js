const prevbtn = document.getElementById('prev')
const nextbtn = document.getElementById('next')
const itens = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')
// const list = document.querySelector('.list')

let active = 0
const total = itens.length
let timer;

function update(direction){
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    if(direction > 0){
        active = active + 1
        if(active === total){
            active = 0
        }
    } else if(direction < 0){
        active = active -1
        if(active < 0){
            active = total -1
        }
    }

    itens[active].classList.add('active')
    dots[active].classList.add('active')

    numberIndicator.textContent = String(active + 1).padStart(2,'0')

    resetTimer()
}

function resetTimer(){
clearInterval(timer)
timer = setInterval(() =>{
    update(1)
}, 5000);
}
resetTimer();

prevbtn.addEventListener('click', function(){
    update(-1)
}
);

nextbtn.addEventListener('click', function(){
    update(1)
});
    