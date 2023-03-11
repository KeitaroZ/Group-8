const slides = document.querySelectorAll('.hero-slide');
const intervalTime = 5000;
let slideIndex = 0;

function nextSlide() {
	slides[slideIndex].classList.remove('active');
	slideIndex++;
	if (slideIndex >= slides.length) {
		slideIndex = 0;
	}
	slides[slideIndex].classList.add('active');
	setTimeout(nextSlide, intervalTime);
}

nextSlide();