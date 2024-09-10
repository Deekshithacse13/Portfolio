document.addEventListener('DOMContentLoaded', () => {
    // Toggle navigation menu
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    const navClose = document.querySelector('.nav__close');
    
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
    
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
    
    
    // Scroll Up Button
    const scrollUpBtn = document.createElement('button');
    scrollUpBtn.className = 'scroll-up';
    scrollUpBtn.innerHTML = '<i class="ri-arrow-up-line"></i>';
    document.body.appendChild(scrollUpBtn);
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        scrollUpBtn.classList.add('show');
      } else {
        scrollUpBtn.classList.remove('show');
      }
    });
  
    scrollUpBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
  
        fetch(this.action, {
          method: 'POST',
          body: new FormData(this),
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(result => {
          alert('Message sent successfully!');
          this.reset(); // Reset form after successful submission
        })
        .catch(error => {
          alert('Failed to send message. Please try again later.');
          console.error('Error:', error);
        });
      });
    }
  });


