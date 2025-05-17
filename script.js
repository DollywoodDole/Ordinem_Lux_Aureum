* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Georgia', serif;
  background-color: #F9F9F9;
  color: #333333;
  transition: background-color 0.3s, color 0.3s;
}

body.dark {
  background-color: #1A2A44;
  color: #FFFFFF;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(26, 42, 68, 0.8);
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: background-color 0.3s;
}

.navbar.scrolled {
  background-color: #1A2A44;
}

.logo {
  font-size: 24px;
  color: #D4A017;
  font-family: 'Georgia', serif;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-link {
  color: #FFFFFF;
  text-decoration: none;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
}

.nav-link:hover {
  color: #D4A017;
}

.theme-toggle {
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 20px;
  cursor: pointer;
}

.hero {
  background-color: #1A2A44;
  color: #FFFFFF;
  text-align: center;
  padding: 120px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  animation: fadeIn 1s ease-in;
}

.hero h1 {
  font-size: 56px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 22px;
  font-family: 'Arial', sans-serif;
  margin-bottom: 30px;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.cta {
  background-color: #D4A017;
  color: #FFFFFF;
  padding: 14px 30px;
  font-size: 18px;
  font-family: 'Arial', sans-serif;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.cta:hover {
  background-color: #B88B14;
}

.wallet-btn {
  background-color: #333333;
  color: #FFFFFF;
  border: 1px solid #D4A017;
  padding: 14px 30px;
  font-size: 18px;
  font-family: 'Arial', sans-serif;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.wallet-btn:hover {
  background-color: #1A2A44;
}

.about {
  background-color: #FFFFFF;
  text-align: center;
  padding: 60px 20px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s, transform 0.5s;
}

.about.visible {
  opacity: 1;
  transform: translateY(0);
}

.about h2 {
  font-size: 36px;
  color: #1A2A44;
  margin-bottom: 20px;
}

.about p {
  font-size: 18px;
  font-family: 'Arial', sans-serif;
  max-width: 700px;
  margin: 0 auto;
}

.contact {
  background-color: #F9F9F9;
  text-align: center;
  padding: 60px 20px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s, transform 0.5s;
}

.contact.visible {
  opacity: 1;
  transform: translateY(0);
}

.contact h2 {
  font-size: 36px;
  color: #1A2A44;
  margin-bottom: 20px;
}

.contact form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  position: relative;
}

.contact input,
.contact textarea {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  border: 1px solid #333333;
  border-radius: 5px;
  background-color: #FFFFFF;
  transition: border-color 0.3s;
}

.contact input:focus,
.contact textarea:focus {
  border-color: #D4A017;
  outline: none;
}

.contact textarea {
  height: 150px;
  resize: vertical;
}

.contact button {
  background-color: #1A2A44;
  color: #FFFFFF;
  padding: 14px;
  font-size: 18px;
  font-family: 'Arial', sans-serif;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contact button:hover {
  background-color: #D4A017;
}

.error-message {
  color: #B88B14;
  font-size: 12px;
  font-family: 'Arial', sans-serif;
  position: absolute;
  bottom: -20px;
  left: 0;
}

.contact p {
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  margin-top: 20px;
}

.contact a {
  color: #D4A017;
  text-decoration: none;
}

.contact a:hover {
  text-decoration: underline;
}

.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #333333;
  color: #FFFFFF;
  padding: 10px 20px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s;
}

.toast.show {
  opacity: 1;
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
}

.modal-content {
  background-color: #FFFFFF;
  margin: 15% auto;
  padding: 20px;
  width: 90%;
  max-width: 400px;
  border-radius: 5px;
  text-align: center;
}

.modal-close {
  float: right;
  font-size: 24px;
  cursor: pointer;
}

.modal h3 {
  font-size: 24px;
  color: #1A2A44;
  margin-bottom: 15px;
}

.modal p {
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  margin-bottom: 20px;
}

.modal button {
  background-color: #D4A017;
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal button:hover {
  background-color: #B88B14;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 18px;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 15px;
  }

  .navbar {
    flex-direction: column;
    gap: 10px;
  }

  .nav-links {
    flex-direction: column;
    gap: 10px;
  }

  .about h2,
  .contact h2 {
    font-size: 28px;
  }

  .about p,
  .contact p {
    font-size: 16px;
  }
}
