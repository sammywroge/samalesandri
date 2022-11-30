document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.christmascountdown p:first-child').addEventListener('click', function(){
		document.querySelector('.gift.one').classList.toggle('show');
		document.querySelector('.overlay').classList.toggle('show');
	});
	document.querySelector('.christmascountdown p:nth-child(5)').addEventListener('click', function(){
		document.querySelector('.gift.five').classList.toggle('show');
		document.querySelector('.overlay').classList.toggle('show');
	});
	document.querySelector('.christmascountdown p:nth-child(6)').addEventListener('click', function(){
		document.querySelector('.gift.six').classList.toggle('show');
		document.querySelector('.overlay').classList.toggle('show');
	});
	document.querySelector('.exit').addEventListener('click', function(){
		document.querySelector('.gift').classList.toggle('show');
		document.querySelector('.overlay').classList.toggle('show');
	});
	document.querySelector('.overlay').addEventListener('click', function(){
		document.querySelector('.gift').classList.toggle('show');
		document.querySelector('.overlay').classList.toggle('show');
	});
});