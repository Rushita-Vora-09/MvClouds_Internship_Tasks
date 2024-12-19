function goToLogin() {
    alert("First do Register");
    window.location.href = "T2register.html"; 
}

function goToRegister() {
    window.location.href = "T2register.html"; 
}

function registration() {

    const name = document.getElementById("rname").value.trim();
    const email = document.getElementById("remail").value.trim();
    const password = document.getElementById("rpw").value;
    const confirmPassword = document.getElementById("cpw").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    document.getElementById("showDetailsBtn").style.display = "inline-block";
}

function showDetails() {
    window.location.href = "T2RegiConf.html";
}

window.onload = function() {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
        document.getElementById("regname").textContent = storedUser.name;
        document.getElementById("regemail").textContent = storedUser.email;
    } else {
        alert("No registration data found! Redirecting to homepage.");
        window.location.href = "Task2_Home.html";
    }
};

function login() {
    const email = document.getElementById("lemail").value.trim();
    const password = document.getElementById("lpw").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("First do Register");
        return false;
    }

    if (storedUser.email === email && storedUser.password === password) {
        alert("Successfully logged in!");
    } else {
        alert("Invalid email or password.");
    }
}
