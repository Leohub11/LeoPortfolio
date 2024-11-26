let slideIndex = 1;
showSlides(slideIndex); // Hiển thị slide đầu tiên

// Thay đổi slide khi bấm nút Next/Prev
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Chuyển đến slide hiện tại khi bấm dot
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Hiển thị slide dựa trên chỉ số
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlide");
  let dots = document.getElementsByClassName("dot");

  // Nếu vượt quá số slide, quay lại slide đầu tiên
  if (n > slides.length) {
    slideIndex = 1;
  }
  // Nếu nhỏ hơn slide đầu tiên, quay lại slide cuối
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Ẩn tất cả các slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Bỏ trạng thái active cho tất cả các dot
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Hiển thị slide hiện tại và thêm trạng thái active cho dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Tự động trình chiếu sau mỗi 2 giây
function autoSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlide");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(autoSlides, 2000); // Lặp lại sau 2 giây
}

// Bắt đầu trình chiếu tự động
autoSlides();
