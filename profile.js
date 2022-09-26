const card1 = document.querySelector('.card1_inner');
const card2 = document.querySelector('.card2_inner');
const card3 = document.querySelector('.card3_inner');
const myFavColorBtn = document.querySelector('#color');
const myFavPlaceBtn = document.querySelector('#place');
const myFavRitualBtn = document.querySelector('#ritual'); 

let imageIndex = 1;
showImages(imageIndex);

function plusImage(n){
    showImages(imageIndex += n);
}

function currentImage(n){
    showImages(imageIndex = n);
}

function showImages(n){
    let i;
    let images = document.getElementsByClassName("myImages");
    if (n > images.length) {imageIndex = 1}
    if (n < 1){imageIndex = images.length}
    for( i = 0; i < images.length; i++){
        images[i].style.display= "none";
    }
    images[imageIndex-1].style.display = "block";
}

function showFavoriteColor(){
    alert('My favorite color is blue.'); 
}
function favPlace(){
    alert('My favorite place is Cahuita, Costa Rica.');
}

function favRitual(){
    alert('My favorite ritual is to watch "30 Rock" and eat "Netflix N Chill".')
}

card1.addEventListener('click', function (){
    card1.classList.toggle('is-flipped')
});

card2.addEventListener('click', function(){
    card2.classList.toggle('is-flipped')
});

card3.addEventListener('click', function(){
    card3.classList.toggle('is-flipped')
});


myFavColorBtn.addEventListener('click', showFavoriteColor);
myFavPlaceBtn.addEventListener('click', favPlace);
myFavRitualBtn.addEventListener('click', favRitual);