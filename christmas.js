
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.christmascountdown>p:first-child').addEventListener('click', function(){
		document.querySelector('.gift.one').classList.add('show');
		document.querySelector('.overlay').classList.add('show');
	});
	document.querySelector('.christmascountdown>p:nth-child(2)').addEventListener('click', function(){
		document.querySelector('.gift.two').classList.add('show');
		document.querySelector('.overlay').classList.add('show');
	});
	document.querySelector('.christmascountdown>p:nth-child(5)').addEventListener('click', function(){
		document.querySelector('.gift.five').classList.add('show');
		document.querySelector('.overlay').classList.add('show');
	});
	document.querySelector('.christmascountdown>p:nth-child(6)').addEventListener('click', function(){
		document.querySelector('.gift.six').classList.add('show');
		document.querySelector('.overlay').classList.add('show');
	});
	document.querySelector('.gift.one .exit').addEventListener('click', function(){
		document.querySelector('.gift.one').classList.remove('show');
		document.querySelector('.overlay').classList.remove('show');
	});
	document.querySelector('.gift.two .exit').addEventListener('click', function(){
		document.querySelector('.gift.two').classList.remove('show');
		document.querySelector('.overlay').classList.remove('show');
	});
	document.querySelector('.gift.five .exit').addEventListener('click', function(){
		document.querySelector('.gift.five').classList.remove('show');
		document.querySelector('.overlay').classList.remove('show');
	});
	document.querySelector('.gift.six .exit').addEventListener('click', function(){
		document.querySelector('.gift.six').classList.remove('show');
		document.querySelector('.overlay').classList.remove('show');
	});
	document.querySelector('.overlay').addEventListener('click', function(){
		document.querySelector('.gift.one').classList.remove('show');
		document.querySelector('.gift.two').classList.remove('show');
		document.querySelector('.gift.five').classList.remove('show');
		document.querySelector('.gift.six').classList.remove('show');
		document.querySelector('.overlay').classList.remove('show');
	});
});