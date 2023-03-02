const showText = document.querySelector('.textarea')
const btn = Document.querySelector('.btn-submit')
function textShow() {
	showText.classList.toggle('btn-submit')
	if (showText.classList.contains('btn-submit')) {
    } 
}
btn.addEventListener('click', textShow)
