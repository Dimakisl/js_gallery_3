
let idx = 0;
let img = document.querySelectorAll('.goods-min');

function slider(){
    for(let i = 0; i < img.length; i++){
        img[i].classList.remove('focused');
    }
    img[idx].classList.add('focused');

    document.getElementById('goods-max').src = img[idx].src; 
}

// управление с интерфейсных кнопок
document.querySelector('.prev').onclick = function(event){ 
    slider();
    prev();
};

document.querySelector('.next').onclick = function(){
    next();
};

function next(){
    if(idx + 1 == img.length){
        idx = 0;
    }
    else{
        idx++;
    }
    slider();
};

function prev(){
    if(idx - 1 == -1){
        idx = img.length - 1;
    }
    else{
        idx--;
    }
    slider();
};

//управление с клавиатуры
window.addEventListener('keydown', function(e){
	if(e.keyCode == 37)
		prev();
	else if(e.keyCode == 39)
        next();
});

                                      