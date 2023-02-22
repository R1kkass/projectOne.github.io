let left = 0
let img = Slider.getElementsByTagName('img').length-1

Next.addEventListener('click', ()=>{
    
    if(img*100>left){
        left=left+100
        Slider.style.marginLeft=-left + '%'
        pl.innerHTML = '0'+(left/100+1)
    }else{
        Slider.style.marginLeft=0 + '%'
        left=0
        pl.innerHTML = '0'+(left/100+1)
    }
})

Prev.addEventListener('click', ()=>{
    pl.innerHTML = '0'+(left/100+1)
    if(left==0){
        left=img*100
        Slider.style.marginLeft=-left + '%'
        pl.innerHTML = '0'+(left/100+1)
    }else{
        left=left-100
        Slider.style.marginLeft=-left + '%'
        pl.innerHTML = '0'+(left/100+1)
    }
})

const Count = document.querySelector('.Photo__sliderButton').getElementsByTagName('p')
console.log(Count);
