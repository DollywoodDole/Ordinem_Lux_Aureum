document.getElementById('inquiry-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log('Form submission:', data);
  alert('Thank you for your inquiry! We’ll follow up soon.');
  e.target.reset();
});
