console.log("hello world");

let form = document.querySelector('#contact');
let img = document.querySelector('#image');

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Successfully submitted!');
}


form.addEventListener('submit', handleSubmit);

function mouseOverEffect(evt){

	alert('You are AMAZING!')
}

img.addEventListener('mouseover', mouseOverEffect)

