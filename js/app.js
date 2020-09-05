const count = document.querySelector('#count');
const mainus = document.querySelector('.mainus-btn');
const reset = document.querySelector('.reset-btn');
const plus = document.querySelector('.plus-btn');
let x = 0;
function decrease(){
	x = x-1;
	count.innerHTML = x;
	if(x<0){
		count.style.color="red";
	}else if(x===0){
		count.style.color="#fff";
	}
}
function increase(){
	x = x+1;
	count.innerHTML = x;
	if(x>0){
		count.style.color="#00cc00";
	}else if(x===0){
		count.style.color="#fff";
	}
}
function rst(){
	x = x*0;
	count.innerHTML = x;
	if(x===0){
		count.style.color="#fff";
	}
}

