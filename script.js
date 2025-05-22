// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Update current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
  
    // Typewriter Effect for Skills
    const skills = ['Web Developer', 'Freelancer', 'YouTuber', 'Graphic Designer'];
    const skillElement = document.querySelector('.typewriter-skills');
    let currentSkillIndex = 0;
    let isDeleting = false;
    let text = '';
    let typingSpeed = 100;
    let deletingSpeed = 50;
    
    function typeSkill() {
      const currentSkill = skills[currentSkillIndex];
      
      if (isDeleting) {
        text = currentSkill.substring(0, text.length - 1);
      } else {
        text = currentSkill.substring(0, text.length + 1);
      }
      
      skillElement.textContent = text;
      
      let typeSpeed = typingSpeed;
      
      if (isDeleting) {
        typeSpeed /= 2;
      }
      
      if (!isDeleting && text === currentSkill) {
        typeSpeed = 2000; // Pause at full text
        isDeleting = true;
      } else if (isDeleting && text === '') {
        isDeleting = false;
        currentSkillIndex = (currentSkillIndex + 1) % skills.length;
        typeSpeed = 500; // Pause before typing next skill
      }
      
      setTimeout(typeSkill, typeSpeed);
    }
    
    // Start typewriter effect
    if (skillElement) {
      typeSkill();
    }
  

    introAudio.addEventListener('ended', () => {
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      audioProgressRing.classList.remove('playing');
      audioPrompt.textContent = 'Check out my CV below!';
      showAudioPrompt();
      downloadCVBtn.classList.add('highlight');
      setTimeout(() => {
        downloadCVBtn.classList.remove('highlight');
      }, 3000);
    });
    // Theme Toggle
    const themeToggleBtn = document.querySelector('.theme-toggle');
    const bodyElement = document.body;
  
    // Load theme from localStorage
    function loadTheme() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        bodyElement.classList.add('dark-mode');
      } else if (savedTheme === 'light') {
        bodyElement.classList.remove('dark-mode');
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        bodyElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      }
    }
  
    // Toggle theme
    function toggleTheme() {
      if (bodyElement.classList.contains('dark-mode')) {
        bodyElement.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      } else {
        bodyElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      }
    }
  
    themeToggleBtn.addEventListener('click', toggleTheme);
    loadTheme();
  
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const header = document.querySelector('.header');
    const navMenu = document.querySelector('.nav-menu');
  
    function toggleMobileMenu() {
      header.classList.toggle('mobile-menu-open');
    }
  
    menuToggle.addEventListener('click', toggleMobileMenu);
  
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (header.classList.contains('mobile-menu-open')) {
          header.classList.remove('mobile-menu-open');
        }
      });
    });
  
    // Header scroll effect
    function handleScroll() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
  
      // Scroll to top button visibility
      const scrollToTopBtn = document.getElementById('scroll-to-top');
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', handleScroll);
  
    // Scroll to top functionality
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    // Parallax effect for hero image
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        function handleMouseMove(e) {
          const xPos = (window.innerWidth / 2 - e.clientX) / 23;
          const yPos = (window.innerHeight / 2 - e.clientY) / 25;
          
          heroImage.style.transform = `translate(${xPos}px, ${yPos}px)`;
        }
    
        window.addEventListener('mousemove', handleMouseMove);
      }
    
      // FIX: Modified animation approach for elements on scroll
      const fadeElements = document.querySelectorAll('.fade-up');
      const progressBars = document.querySelectorAll('.progress');
  // Use Intersection Observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // When element enters viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // If it's a progress bar, animate it
          if (entry.target.classList.contains('progress')) {
            const width = entry.target.getAttribute('data-width');
            if (width) {
              entry.target.style.width = width;
            }
          }
          
          // Important: Do NOT unobserve elements to keep them visible when scrolling back
          // This is the key fix for the disappearing sections
        } 
      });
    },
    { threshold: 0.15 } // Slightly increase threshold for better detection
  );

  // Observe all fade elements
  fadeElements.forEach(element => {
    observer.observe(element);
  });

  // Observe all progress bars
  progressBars.forEach(progressBar => {
    observer.observe(progressBar);
  });

  // Initialize the skill bars
  document.querySelectorAll('.skill-bar').forEach(item => {
    item.classList.add('fade-up');
  });

  // Contact form submission with validation
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic form validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      if (!name || !email || !subject || !message) {
        alert('Please fill out all fields in the form.');
        return;
      }
      
      // Simulate form submission (would normally send to a backend)
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      // Simulate async request
      setTimeout(() => {
        alert('Message sent successfully! I will get back to you soon.');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }, 1500);
      
      // In a real application, you would use Formspree or a similar service:
      // const form = e.target;
      // const formData = new FormData(form);
      // fetch("https://formspree.io/f/your-form-id", {
      //   method: "POST",
      //   body: formData,
      //   headers: {
      //     Accept: "application/json",
      //   },
      // })
      //   .then((response) => {
      //     if (response.ok) {
      //       alert("Message sent successfully!");
      //       form.reset();
      //     } else {
      //       alert("Failed to send message. Please try again.");
      //     }
      //     submitBtn.disabled = false;
      //     submitBtn.textContent = originalBtnText;
      //   })
      //   .catch(() => {
      //     alert("Failed to send message. Please try again.");
      //     submitBtn.disabled = false;
      //     submitBtn.textContent = originalBtnText;
      //   });
    });
  }    
  // Add animation classes to various elements
  const sections = document.querySelectorAll('.section');

  // Dotted Background Generator
  function createDottedBackground() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBackground();
    }

    function drawBackground() {
      const isDarkMode = document.body.classList.contains('dark-mode');
      const backgroundColor = isDarkMode ? '#0a0a0f' : '#ffffff';
      const dotColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
      const dotSize = 2;
      const spacing = 20;

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = dotColor;
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Initial setup
    resizeCanvas();

    // Redraw on window resize
    window.addEventListener('resize', resizeCanvas);

    // Redraw on theme change
    const themeToggleBtn = document.querySelector('.theme-toggle');
    themeToggleBtn.addEventListener('click', drawBackground);
  }

  // Initialize dotted background
  createDottedBackground();

  sections.forEach(section => {
    const children = section.querySelectorAll(':scope > .container > *:not(.section-header)');
    children.forEach(element => {
      if (!element.classList.contains('fade-up')) {
        element.classList.add('fade-up');
      }
    });
  });
    // Add project cards to fade-up elements
    document.querySelectorAll('.project-card').forEach(card => {
        if (!card.classList.contains('fade-up')) {
            card.classList.add('fade-up');
          }
        });
      
        // Ensure all fade-up elements are being observed
        document.querySelectorAll('.fade-up').forEach(element => {
          observer.observe(element);
        });
      
        // Initial trigger for elements already in view on page load
        fadeElements.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85) {
            element.classList.add('visible');
          }
        });
      
        // Initial animation for progress bars in view
        progressBars.forEach(progressBar => {
          const rect = progressBar.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85) {
            const width = progressBar.getAttribute('data-width');
            if (width) {
              progressBar.style.width = width;
            }
          }
        });
      });
