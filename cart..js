let body=document.querySelector('body')
let icon=document.querySelector('.icon')
let close=document.querySelector('close')
let cartTab=document.querySelector('.CartTab')

icon.addEventListener('click',()=>{
    cartTab.classList.toggle('showCart')
})

icon.addEventListener('click',()=>{
    close.classList.toggle('showCart')
})