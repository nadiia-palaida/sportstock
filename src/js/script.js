 //animate

 //LAZY

  $(function() {
        $('.lazy').Lazy();
    });

 //DROP-DOWN LANGUAGE MENU
 let dropDownMenu = document.querySelector('#drop-down');
 document.querySelectorAll('.select-language').forEach(function(element){
 	element.onclick = function(event){
 		event.stopPropagation();
 		dropDownMenu.classList.toggle('hide');
 	};
 });

 dropDownMenu.onclick = function(event){
 	event.stopPropagation();
 };

 document.onclick = function(event){
 	event.preventDefault();
 	dropDownMenu.classList.add('hide');
 };


//CLEAR INPUT SEARCH
let clearButton = document.querySelectorAll('.clear-search');
clearButton.forEach(function(element){
	element.onclick = function(){
		document.querySelectorAll('.input-search').forEach(function(element) {
			element.value = '';
		});
	};	
});

//ADD CLASS NO-GUTTERS 
function noGutters(){
	let widhtScreen = document.documentElement.clientWidth;
	if(widhtScreen < 992 && widhtScreen > 768) {
		document.querySelector('.header .row').classList.add('no-gutters');
	}
	else {
		document.querySelector('.header .row').classList.remove('no-gutters');
	};
}

noGutters();

window.addEventListener('resize', noGutters);

// DROPDOWN fOOTER

let dropDownHelp = document.querySelector('#help-item');
let dropDownStock = document.querySelector('#stock-item');
let dropDownLaw = document.querySelector('#law-item');
let dropDownContacts = document.querySelector('#contacts-item');

let btnHelp = document.querySelector('#btn-help');
let btnStock = document.querySelector('#btn-stock');
let btnLaw = document.querySelector('#btn-law');
let btnContacts = document.querySelector('#btn-contact');

btnHelp.onclick = function (){
	dropDownHelp.classList.toggle('hide');
};

btnStock.onclick = function (){
	dropDownStock.classList.toggle('hide');
};

btnLaw.onclick = function (){
	dropDownLaw.classList.toggle('hide');
};

btnContacts.onclick = function (){
	dropDownContacts.classList.toggle('hide');
};
