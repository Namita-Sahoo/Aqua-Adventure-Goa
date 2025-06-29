
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
    heading: "Book Your Ultimate Goa Experience Now",
    description: "Experience the adrenaline rush as surfers conquer towering waves, showcasing skill and passion in every move.",
    buttonText: "Inquiry Now"
  },
  {
    src: "./assets/video/video3.mp4",
    poster: "./assets/video/placeholder3.png",
    heading: "Book Your Ultimate Goa Experience Now",
    description: "Glide above the sea with wind in your hair and ocean below — unmatched thrills, breathtaking views.",
    buttonText: "Inquiry Now"
  },
  {
    src: "./assets/video/video2.mp4",
    poster: "./assets/video/placeholder2.png",
    heading: "Book Your Ultimate Goa Experience Now",
    description: "Join scuba divers as they explore a vibrant marine ecosystem, teeming with colorful fish and intricate coral formations.",
    buttonText: "Inquiry Now"
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

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || phone === "" || message === "") {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Form',
        text: 'Please fill out all fields before submitting.'
      });
      console.log(Swal);
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: `Thank you ${name}, we’ll get back to you soon.`
      });
      this.reset();
    }
  });