const app = document.getElementById("app");

function renderRegisterPage() {
  app.innerHTML = `
    <h1>Register</h1>
    <form id="registerForm">
      <label for="username">Username</label>
      <input type="text" id="username" placeholder="Enter your username" required />
      <div id="usernameError" class="error"></div>
      
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" required />
      <div id="emailError" class="error"></div>
      
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" required />
      <div id="passwordError" class="error"></div>
      
      <button type="submit">Register</button>
    </form>
    <p>Already registered? <button onclick="renderLoginPage()">Log in here</button></p>
  `;

  const form = document.getElementById("registerForm");
  form.addEventListener("submit", handleRegister);
}

function renderLoginPage() {
  app.innerHTML = `
    <h1>Login</h1>
    <form id="loginForm">
      <label for="loginUsername">Username</label>
      <input type="text" id="loginUsername" placeholder="Enter your username" required />
      <div id="loginUsernameError" class="error"></div>
      
      <label for="loginPassword">Password</label>
      <input type="password" id="loginPassword" placeholder="Enter your password" required />
      <div id="loginPasswordError" class="error"></div>
      
      <button type="submit">Login</button>
    </form>
    <p>New user? <button onclick="renderRegisterPage()">Register here</button></p>
  `;

  const form = document.getElementById("loginForm");
  form.addEventListener("submit", handleLogin);
}

function renderWelcomePage(username) {
  app.innerHTML = `
    <h1>Welcome, ${username}!</h1>
    <p>Thank you for logging in.</p>
    <button onclick="renderConfirmationPage()">Proceed</button>
  `;
}

function renderConfirmationPage() {
  const username = sessionStorage.getItem("username");
  const email = sessionStorage.getItem("email");

  app.innerHTML = `
    <h1>Registration Confirmation</h1>
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Email:</strong> ${email}</p>
    <button onclick="renderLoginPage()">Logout</button>
  `;
}

function handleRegister(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const usernameError = document.getElementById("usernameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  let isValid = true;

  if (!username) {
    usernameError.textContent = "Username is required.";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (isValid) {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    renderLoginPage();
  }
}

function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;

  const loginUsernameError = document.getElementById("loginUsernameError");
  const loginPasswordError = document.getElementById("loginPasswordError");

  const storedUsername = sessionStorage.getItem("username");
  const storedPassword = sessionStorage.getItem("password");

  if (username !== storedUsername) {
    loginUsernameError.textContent = "Username does not match.";
    return;
  } else {
    loginUsernameError.textContent = "";
  }

  if (password !== storedPassword) {
    loginPasswordError.textContent = "Incorrect password.";
    return;
  } else {
    loginPasswordError.textContent = "";
  }

  renderWelcomePage(username);
}

// Initialize the app
renderRegisterPage();
