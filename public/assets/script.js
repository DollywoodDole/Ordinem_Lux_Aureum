document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scroll for Nav Links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60, // Adjust for sticky navbar
          behavior: 'smooth'
        });
      }
      // Update active link
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }

  // Form Validation
  const form = document.getElementById('inquiry-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const toast = document.getElementById('toast');

  // Debounce utility for input validation
  const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  };

  // Validate input
  const validateInput = (input, errorId, validateFn, errorMessage) => {
    const errorElement = document.getElementById(errorId);
    if (!validateFn(input.value)) {
      errorElement.textContent = errorMessage;
      input.setAttribute('aria-invalid', 'true');
      return false;
    } else {
      errorElement.textContent = '';
      input.setAttribute('aria-invalid', 'false');
      return true;
    }
  };

  // Validation functions
  const isValidName = value => value.trim().length >= 2;
  const isValidEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isValidMessage = value => value.trim().length >= 10;

  // Debounced validation for inputs
  const debouncedValidateName = debounce(() => {
    validateInput(nameInput, 'name-error', isValidName, 'Name must be at least 2 characters.');
  }, 500);
  const debouncedValidateEmail = debounce(() => {
    validateInput(emailInput, 'email-error', isValidEmail, 'Please enter a valid email.');
  }, 500);
  const debouncedValidateMessage = debounce(() => {
    validateInput(messageInput, 'message-error', isValidMessage, 'Message must be at least 10 characters.');
  }, 500);

  // Attach validation listeners
  nameInput.addEventListener('input', debouncedValidateName);
  emailInput.addEventListener('input', debouncedValidateEmail);
  messageInput.addEventListener('input', debouncedValidateMessage);

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isNameValid = validateInput(nameInput, 'name-error', isValidName, 'Name must be at least 2 characters.');
    const isEmailValid = validateInput(emailInput, 'email-error', isValidEmail, 'Please enter a valid email.');
    const isMessageValid = validateInput(messageInput, 'message-error', isValidMessage, 'Message must be at least 10 characters.');

    if (isNameValid && isEmailValid && isMessageValid) {
      // Store form data in localStorage (mock submission)
      const formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('inquiry', JSON.stringify(formData));

      // Show toast
      toast.textContent = 'Inquiry submitted successfully!';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);

      // Reset form
      form.reset();
    } else {
      toast.textContent = 'Please fix the errors in the form.';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
    }
  });

  // Mock Web3 Wallet
  const walletBtn = document.getElementById('wallet-btn');
  const walletModal = document.getElementById('wallet-modal');
  const modalClose = document.getElementById('modal-close');
  const confirmWallet = document.getElementById('confirm-wallet');
  const walletStatus = document.getElementById('wallet-status');

  walletBtn.addEventListener('click', () => {
    walletModal.classList.add('show');
    walletStatus.textContent = 'Click below to connect your wallet.';
  });

  modalClose.addEventListener('click', () => {
    walletModal.classList.remove('show');
  });

  confirmWallet.addEventListener('click', () => {
    // Mock wallet connection
    walletStatus.textContent = 'Wallet connected successfully!';
    confirmWallet.disabled = true;
    setTimeout(() => {
      walletModal.classList.remove('show');
      confirmWallet.disabled = false;
      toast.textContent = 'Wallet connected!';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
    }, 1000);
  });

  // Close modal on outside click
  walletModal.addEventListener('click', (e) => {
    if (e.target === walletModal) {
      walletModal.classList.remove('show');
    }
  });

  // Keyboard accessibility for modal
  walletModal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      walletModal.classList.remove('show');
    }
  });

  // Active Nav Link on Scroll
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 60;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
});