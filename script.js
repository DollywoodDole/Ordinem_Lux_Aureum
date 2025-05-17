document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Sticky Navbar with Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
    // Intersection Observer for Section Animations
    const sections = document.querySelectorAll('.about, .contact');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));
  
    // Form Validation
    const form = document.getElementById('inquiry-form');
    const inputs = form.querySelectorAll('input, textarea');
    const validators = {
      name: value => value.length >= 2 ? '' : 'Name must be at least 2 characters.',
      email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address.',
      message: value => value.length >= 10 ? '' : 'Message must be at least 10 characters.'
    };
  
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        const error = validators[input.id](input.value);
        const errorElement = input.nextElementSibling;
        errorElement.textContent = error;
        input.style.borderColor = error ? '#B88B14' : '#333333';
      });
    });
  
    // Form Submission with Local Storage
    form.addEventListener('submit', e => {
      e.preventDefault();
      let isValid = true;
      inputs.forEach(input => {
        const error = validators[input.id](input.value);
        if (error) isValid = false;
        input.nextElementSibling.textContent = error;
      });
  
      if (isValid) {
        const formData = {
          name: form.name.value,
          email: form.email.value,
          message: form.message.value
        };
        localStorage.setItem('formData', JSON.stringify(formData));
        showToast('Form submitted successfully!');
        form.reset();
      } else {
        showToast('Please fix the errors in the form.');
      }
    });
  
    // Load Saved Form Data
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const { name, email, message } = JSON.parse(savedData);
      form.name.value = name || '';
      form.email.value = email || '';
      form.message.value = message || '';
    }
  
    // Toast Notification
    function showToast(message) {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
    }
  
    // Mock Wallet Connection
    const walletBtn = document.getElementById('wallet-btn');
    const modal = document.getElementById('wallet-modal');
    const modalClose = document.getElementById('modal-close');
    const confirmWallet = document.getElementById('confirm-wallet');
    const walletStatus = document.getElementById('wallet-status');
  
    walletBtn.addEventListener('click', () => {
      modal.style.display = 'block';
      walletStatus.textContent = 'Click below to connect your wallet.';
    });
  
    modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    confirmWallet.addEventListener('click', () => {
      const mockAddress = '0x' + Math.random().toString(16).slice(2, 10) + '...';
      walletStatus.textContent = `Connected: ${mockAddress}`;
      walletBtn.textContent = `Connected: ${mockAddress.slice(0, 6)}...`;
      showToast('Wallet connected successfully!');
      setTimeout(() => modal.style.display = 'none', 1000);
    });
  
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      document.body.classList.add('dark');
      themeToggle.textContent = '☀️';
    }
  
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
  
    // Parallax Effect
    window.addEventListener('scroll', () => {
      const hero = document.querySelector('.hero');
      const scrollPosition = window.scrollY;
      hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  });