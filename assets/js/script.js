
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
    src: "./assets/video/video3.mp4",
    poster: "./assets/video/placeholder3.png",
    heading: "Soar Above the Sea",
    description: "Glide above the sea with wind in your hair and ocean below — unmatched thrills, breathtaking views.",
    buttonText: "Start Journey"
  },
  {
    src: "./assets/video/video2.mp4",
    poster: "./assets/video/placeholder2.png",
    heading: "Dive into an Underwater Wonderland",
    description: "Join scuba divers as they explore a vibrant marine ecosystem, teeming with colorful fish and intricate coral formations.",
    buttonText: "Discover More"
  }
];


  let currentIndex = 0; 

  function toggleNav() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
  }

 function changeVideo(index) {
  const video        = document.getElementById("background-video");
  const content      = document.querySelector(".content");
  const heading      = content.querySelector("h1");
  const description  = content.querySelector("p");
  const button       = content.querySelector("button");

  const selected     = videos[index];

  video.classList.remove("clip-animate");
  void video.offsetWidth;
  video.classList.add("clip-animate");

  video.pause();
  video.setAttribute("poster", selected.poster); // Use setAttribute for full browser support

  const source = video.querySelector("source");
  if (source) {
    source.setAttribute("src", selected.src);    
    video.load();                               

    video.oncanplay = () => {
      video.play().catch(() => {});            
    };
  }

  /* 3. Update text content */
  heading.textContent     = selected.heading;
  description.textContent = selected.description;
  button.textContent      = selected.buttonText;

  currentIndex = index;
}

changeVideo(0);

