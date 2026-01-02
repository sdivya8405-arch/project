const reset = document.querySelector('#reset')
const inc = document.querySelector('#inc')
const dec = document.querySelector('#dec')
const counts = document.querySelector('#content')

let count = 0;

inc.addEventListener('click',()=>{
    count++
    counts.innerText = count;
    color();
})
dec.addEventListener('click',()=>{
    count--;
    counts.innerText = count;
    color();
})
reset.addEventListener('click',()=>{
    count = 0;
    counts.innerText = count;
    color();
})

function color(){
    if(count>0){
        counts.style.color='green'
    }
    else if(count<0){
        counts.style.color='red'
    }
    else{
        counts.style.color='blue'
    }
}