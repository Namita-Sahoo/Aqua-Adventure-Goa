
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
    poster: "./assets/video/placeholder1.png",
    heading: "Ride the Thrill of Ocean Waves",
    description: "Experience the adrenaline rush as surfers conquer towering waves, showcasing skill and passion in every move.",
    buttonText: "Read More"
  },
  {
    src: "./assets/video/video2.mp4",
    poster: "./assets/video/placeholder2.png",
    heading: "Dive into an Underwater Wonderland",
    description: "Join scuba divers as they explore a vibrant marine ecosystem, teeming with colorful fish and intricate coral formations.",
    buttonText: "Discover More"
  },
  {
    src: "./assets/video/video3.mp4",
    poster: "./assets/video/placeholder3.png",
    heading: "Soar Above the Sea",
    description: "Glide above the sea with wind in your hair and ocean below — unmatched thrills, breathtaking views.",
    buttonText: "Start Journey"
  }
];


  let currentIndex = 0; 

  function toggleNav() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
  }

  function changeVideo(index) {
  const video      = document.getElementById("background-video");
  const content    = document.querySelector(".content");
  const heading    = content.querySelector("h1");
  const description= content.querySelector("p");
  const button     = content.querySelector("button");

  const selected   = videos[index];

  /* ------------- 1. animate clip-path ------------- */
  video.classList.remove("clip-animate");
  void video.offsetWidth;          // restart the animation
  video.classList.add("clip-animate");

  /* ------------- 2. swap poster + src ------------- */
 video.poster = selected.poster;

const source = video.querySelector('source');
if (source) {
  source.src = selected.src;
  video.load();
  video.play().catch(() => {});
}
  

  /* ------------- 3. update text content ----------- */
  heading.textContent     = selected.heading;
  description.textContent = selected.description;
  button.textContent      = selected.buttonText;

  currentIndex = index;
}

changeVideo(0);

