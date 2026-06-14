const loginBox = document.querySelector('.loginbox');
const loginBtn = document.querySelector('.login-button');
const closeIcon = document.querySelector('.close-icon');
const loginForm = document.querySelector('.popup-box.login');
const registerForm = document.querySelector('.popup-box.signup');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.signup-link');

// Open login box
loginBtn.addEventListener('click', () => {
  loginBox.classList.add('active-pop');
  loginBox.style.display = 'flex';
  setTimeout(() => loginBox.classList.add('active'), 50);
  document.querySelector(".welcome-text").style.display = "none";
});

// Close popup
closeIcon.addEventListener('click', () => {
  loginBox.classList.remove('active');
  loginBox.classList.remove('active-pop');
  loginForm.style.transform = 'translateX(0)';
  registerForm.style.transform = 'translateX(100%)';
  setTimeout(() => {
    loginBox.style.display = 'none';
  }, 300);
});

// Switch to Signup
registerLink.addEventListener('click', () => {
  loginForm.style.transform = 'translateX(-100%)';
  registerForm.style.transform = 'translateX(0)';
});

// Switch to Login
loginLink.addEventListener('click', () => {
  loginForm.style.transform = 'translateX(0)';
  registerForm.style.transform = 'translateX(100%)';
});
