document.addEventListener('DOMContentLoaded', () => {
  // Utility: Debounce function
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  // Smooth Scroll
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Sticky Navbar with Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Intersection Observer for Section Animations
  const sections = document.querySelectorAll('.about, .contact');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
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
    input.addEventListener('input', debounce(() => {
      const error = validators[input.id](input.value);
      const errorElement = document.getElementById(`${input.id}-error`);
      errorElement.textContent = error;
      input.setAttribute('aria-invalid', !!error);
      input.style.borderColor = error ? '#B88B14' : '#333333';
    }, 300));
  });

  // Form Submission with Local Storage
  form.addEventListener('submit', e => {
    e.preventDefault();
    let isValid = true;
    inputs.forEach(input => {
      const error = validators[input.id](input.value);
      if (error) isValid = false;
      document.getElementById(`${input.id}-error`).textContent = error;
    });

    if (isValid) {
      const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('formData', JSON.stringify(formData));
      showToast('Form submitted successfully!', 'success');
      form.reset();
      inputs.forEach(input => {
        document.getElementById(`${input.id}-error`).textContent = '';
        input.style.borderColor = '#333333';
      });
    } else {
      showToast('Please fix the errors in the form.', 'error');
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
  function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    setTimeout(() => toast.className = 'toast', 4000);
  }

  // Mock Wallet Connection
  const walletBtn = document.getElementById('wallet-btn');
  const modal = document.getElementById('wallet-modal');
  const modalClose = document.getElementById('modal-close');
  const confirmWallet = document.getElementById('confirm-wallet');
  const walletStatus = document.getElementById('wallet-status');

  walletBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    walletStatus.textContent = 'Simulating Web3 wallet connection...';
    walletStatus.setAttribute('aria-live', 'polite');
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  confirmWallet.addEventListener('click', () => {
    const mockAddress = '0x' + Array(40).fill().map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    walletStatus.textContent = `Connected: ${mockAddress.slice(0, 6)}...${mockAddress.slice(-4)}`;
    walletBtn.textContent = `Connected: ${mockAddress.slice(0, 6)}...`;
    walletBtn.setAttribute('aria-label', `Connected wallet: ${mockAddress.slice(0, 6)}...${mockAddress.slice(-4)}`);
    showToast('Wallet connected successfully!', 'success');
    setTimeout(() => modal.style.display = 'none', 1000);
  });

  // Keyboard Accessibility for Modal
  modal.addEventListener('keydown', e => {
    if (e.key === 'Escape') modal.style.display = 'none';
  });

  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️';
    themeToggle.setAttribute('aria-label', 'Switch to light theme');
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', `Switch to ${newTheme === 'dark' ? 'light' : 'dark'} theme`);
    showToast(`Switched to ${newTheme} mode`, 'info');
  });

  // Parallax Effect
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    hero.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
  });

  // Active Nav Link on Scroll
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href').substring(1) === current);
    });
  });
});