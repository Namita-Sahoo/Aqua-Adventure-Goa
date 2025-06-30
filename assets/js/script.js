
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > window.innerHeight - 100) { 
    // when user scrolls beyond the home section
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


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