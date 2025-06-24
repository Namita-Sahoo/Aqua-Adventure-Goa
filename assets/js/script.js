
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > window.innerHeight - 100) { 
    // when user scrolls beyond the home section
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


//home section video content 
const videos = [
    {
      src: "./assets/video/video1.mp4",
      heading: "Ride the Thrill of Ocean Waves",
      description: "Experience the adrenaline rush as surfers conquer towering waves, showcasing skill and passion in every move.",
      buttonText: "Read More"
    },
    {
      src: "./assets/video/video2.mp4",
      heading: "Dive into an Underwater Wonderland",
      description: "Join scuba divers as they explore a vibrant marine ecosystem, teeming with colorful fish and intricate coral formations.",
      buttonText: "Discover More"
    },
    {
      src: "./assets/video/video3.mp4",
      heading: "Soar Above the Sea: A Parasailing Adventure",
      description: "Glide above the sea with wind in your hair and ocean below — parasailing offers unmatched thrills, breathtaking views.",
      buttonText: "Start Journey"
    }
  ];

  let currentIndex = 0; 

  function toggleNav() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
  }

  function changeVideo(index) {
      const video = document.getElementById("background-video");
      const content = document.querySelector(".content");
      const heading = content.querySelector("h1");
      const description = content.querySelector("p");
      const button = content.querySelector("button");

      const selected = videos[index];

      video.classList.remove("clip-animate");
      void video.offsetWidth; 
      video.classList.add("clip-animate");

      video.src = selected.src;
      video.load();
      video.play();

      heading.textContent = selected.heading;
      description.textContent = selected.description;
      button.textContent = selected.buttonText;

      currentIndex = index;
    }



//exclusive discount card carousel function 
window.addEventListener('load', () => {
  const track = document.getElementById('carouselTrack');
  let slides = document.querySelectorAll('.exclusive-slide');
  let index = 1;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.id = 'first-clone';
  lastClone.id = 'last-clone';

  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  slides = document.querySelectorAll('.exclusive-slide');

  let slideWidth = slides[0].offsetWidth + 10;
  track.style.transform = `translateX(-${slideWidth * index}px)`;

  function moveCarousel(direction) {
    if (direction === 1 && index >= slides.length - 1) return;
    if (direction === -1 && index <= 0) return;

    index += direction;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }

  track.addEventListener('transitionend', () => {
    if (slides[index].id === 'first-clone') {
      track.style.transition = 'none';
      index = 1;
      track.style.transform = `translateX(-${slideWidth * index}px)`;
    }
    if (slides[index].id === 'last-clone') {
      track.style.transition = 'none';
      index = slides.length - 2;
      track.style.transform = `translateX(-${slideWidth * index}px)`;
    }
  });

  window.addEventListener('resize', () => {
    slideWidth = slides[0].offsetWidth + 20;
    track.style.transition = 'none';
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  });

  window.moveCarousel = moveCarousel;  // expose globally
});

  //--------------------- function to popup card data
  function openPopupFromCard(card) {
    const image = card.dataset.image;
    const title = card.dataset.title;
    const description = card.dataset.description;
    const price = card.getAttribute('data-price');
    const originalPrice = card.getAttribute('data-original-price');

    // Update popup content
    document.getElementById("popupImage").src = image;
    document.getElementById("popupTitle").textContent = title;
    document.getElementById("popupDescription").textContent = description;
    const priceContainer = document.getElementById('popupPrice');
   priceContainer.innerHTML = `<strong>Price:</strong> <span class="discount">${price}</span> <span class="original">${originalPrice}</span>`;

    // Show popup
    document.getElementById("popup").style.display = "flex";
  }

function showCategory(category) {
  const sections = document.querySelectorAll(".card-section");
  const buttons = document.querySelectorAll(".category-buttons button");

  // Hide all sections and reset their hidden cards and toggle buttons
  sections.forEach(section => {
    section.style.display = "none";

    const hiddenCards = section.querySelectorAll(".hidden-card");
    hiddenCards.forEach(card => card.style.display = "none");

    const btn = section.querySelector(".toggle-btn");
    if (btn) btn.classList.remove("open"); // reset arrow position
  });

  // Remove active state from buttons
  buttons.forEach(btn => btn.classList.remove("active"));

  // Show the selected category section
  const activeSection = document.getElementById(category);
  activeSection.style.display = "flex";

  // Add active class to clicked button
  event.target.classList.add("active");

  // Attach toggle button event for this section
  const toggleBtn = activeSection.querySelector(".toggle-btn");
  if (toggleBtn) {
    toggleBtn.onclick = () => {
      const isOpen = toggleBtn.classList.contains("open");
      const hiddenCards = activeSection.querySelectorAll(".hidden-card");

      hiddenCards.forEach(card => {
        card.style.display = isOpen ? "none" : "block";
      });

      // Toggle arrow rotation
      toggleBtn.classList.toggle("open");
    };
  }
}

