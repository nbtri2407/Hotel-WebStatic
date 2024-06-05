const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let currentIndex = 0;
const slideInterval = 4000;

function showSlide(index) {
  const sliderContainer = document.querySelector(".slider-container");
  sliderContainer.style.transform = `translateX(${-index * 100}%)`;
}
const progressBar = document.querySelector(".progress-bar");
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
  setProgressBar(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
  setProgressBar(currentIndex);
}

function setProgressBar(index) {
  progressBar.style.transform = `translateX(${index * 100}%)`;
}

// Auto-slide functionality
setInterval(nextSlide, slideInterval); // Change slide every 4 seconds

// Optional: Add navigation buttons
const slider = document.querySelector(".slider");
const nextButton = document.getElementById("next");
nextButton.onclick = nextSlide;
const prevButton = document.getElementById("prev");
prevButton.onclick = prevSlide;
// sLIDER ----------------------------------

// p CODE =====================
const pcode = document.querySelector(".showDialog");
const closeDialog = document.getElementById("close-dialog");
pcode.addEventListener("click", function () {
  document.querySelector(".dialog").classList.toggle("show");
});

closeDialog.addEventListener("click", function () {
  document.querySelector(".dialog").classList.remove("show");
});

document.querySelector(".dropbtn").addEventListener("click", function () {
  document.querySelector(".dropdown-content").classList.toggle("show");
  dropbtnArrow.classList.toggle("rotate1");
});
const dropbtnArrow = document.getElementById("dropbtn-arrow");
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        dropbtnArrow.classList.remove("rotate1");
      }
    }
  }
};
const dropdownItems = document.querySelectorAll(".dropdown-item");
console.log(dropdownItems);
// Add click event listener to each dropdown item
dropdownItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const selectedValue = this.getAttribute("data-value");
    document.querySelector(".dropbtn-text").textContent = selectedValue + " ";
    // document.querySelector(".dropbtn").appendChild(createArrow());
  });
});

const showRoomListBtn = document.querySelector(".show-room-list-btn");
const showRoomListIcon = document.getElementById("show-list");
const hiddenRoomListIcon = document.getElementById("close-list");
const roomList = document.querySelector(".room-list");


showRoomListBtn.addEventListener("click", function () {
    showRoomListIcon.classList.toggle('hidden')
    hiddenRoomListIcon.classList.toggle('hidden')
    roomList.classList.toggle('show')
});
