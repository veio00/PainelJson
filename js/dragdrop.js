$(document).ready(function() {
	
	var dragSrcEl = null;

	//evento de arrastar o elemento
	function handleDragStart(e) {
	
		this.style.opacity = '1';
	
		dragSrcEl = this;
	
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData('text/html', this.innerHTML);
	}
	//evento do elemento sobre o outro
	function handleDragOver(e) {
	if (e.preventDefault) {
		e.preventDefault(); 
	}
	
	e.dataTransfer.dropEffect = 'move';  
	
	return false;
	}
	//coloca classe para mudança de posição na tag de baixo 
	function handleDragEnter(e) {
	
	this.classList.add('over');
	}
	//tira classe de mudança caso tenho na tag de cima
	function handleDragLeave(e) {
	this.classList.remove('over'); 
	}
	
	//faz a troca de elemento ao soltar 
	function handleDrop(e) {
	
	if (e.stopPropagation) {
		e.stopPropagation(); 
	}

	if (dragSrcEl != this) {
   
		dragSrcEl.innerHTML = this.innerHTML;
		this.innerHTML = e.dataTransfer.getData('text/html');
	}
	return false;
	}
	//remover a classe de mudança de todos os elementos no final 
	function handleDragEnd(e) {
	
	[].forEach.call(cols, function (col) {
		col.classList.remove('over');
	});
	}
	
	var cols = document.querySelectorAll('.columns .column');
	[].forEach.call(cols, function(col) {
	col.addEventListener('dragstart', handleDragStart, false);
	col.addEventListener('dragenter', handleDragEnter, false)
	col.addEventListener('dragover', handleDragOver, false);
	col.addEventListener('dragleave', handleDragLeave, false);
	col.addEventListener('drop', handleDrop, false);
	col.addEventListener('dragend', handleDragEnd, false);
	});


	
});



















