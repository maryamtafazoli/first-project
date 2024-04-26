const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('input');
const products = document.querySelectorAll('.product_search');

const searchHandler = (event) =>{
    const searchValue = event.target.value.toLowerCase().trim();

    products.forEach((product) =>{
        const productName = product.children[1].innerText.toLowerCase();
        if(productName.includes(searchValue)){
            product.style.display ="block";
        }
        else{
            product.style.display ="none";
        }
    });
};
search.addEventListener("keyup", searchHandler);

btn.addEventListener('click', function() {
    search.classList.toggle('active');
    input.focus()
})



// slider

const slides = document.querySelector('.slider-items').children;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const totalSlide = slides.length;
let index = 0;
let duration = 2000;

next.addEventListener("click",  () => slide('next'))

prev.addEventListener("click",  () => slide('prev'))


function slide(direction){
    progress()
    if(direction=='next'){
        if(index == totalSlide-1){
            index = 0;
        }else{
            index ++;
        }
    }

    if(direction=='prev'){
        if(index == 0){
            index= totalSlide-1
        }else{
            index --;
        }
    }


    clearInterval(timer);
    timer = setInterval(autoSlide, duration)
    
    for(let i =0; i<slides.length; i++){
        slides[i].classList.remove('active')
    }

    slides[index].classList.add('active')
  
}



function progress(){
    document.querySelector('.progress').innerHTML = '';
    const div = document.createElement('div');
        div.style.height = '5px';
        div.style.width = '0';
        div.style.position = 'absolute';
        div.style.top = '0';
        div.style.left = '0';
        // div.style.backgroundColor= 'red';
        div.id = 'progress';
        div.style.animation = 'progress ' + duration/1000 + "s linear";
        document.querySelector('.progress').appendChild(div)
}



function autoSlide(){
    slide('next');
}

let timer = setInterval(autoSlide, duration)

progress();