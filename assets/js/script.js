
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
      description: "Glide above the sea with wind in your hair and ocean below — parasailing offers unmatched thrills and breathtaking views.",
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
  const track = document.getElementById('carouselTrack');
  let slides = document.querySelectorAll('.exclusive-slide');
  let index = 1;

  // Clone first and last for infinite loop effect
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.id = 'first-clone';
  lastClone.id = 'last-clone';

  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  slides = document.querySelectorAll('.exclusive-slide');
  const slideWidth = slides[0].offsetWidth + 20;
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
    // Recalculate width on resize
    track.style.transition = 'none';
    const newSlideWidth = slides[0].offsetWidth + 20;
    track.style.transform = `translateX(-${newSlideWidth * index}px)`;
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