window.addEventListener('scroll', ()=>{
    const header = document.querySelector('.header')
    
    if(window.pageYOffset > 0){
        header.classList.add('sticky')
    }else{
        header.classList.remove('sticky')
    }
})

window.addEventListener('scroll', ()=>{
    const header = document.querySelector('.header')
    
    if(window.pageYOffset > 690){
        header.classList.add('sticky-3')
    }else{
        header.classList.remove('sticky-3')
    }
})

window.addEventListener('scroll', ()=>{
    const header = document.querySelector('.header')
    
    if(window.pageYOffset > 990){
        header.classList.add('sticky-')
        
    }else{
        header.classList.remove('sticky-')
    }
})

