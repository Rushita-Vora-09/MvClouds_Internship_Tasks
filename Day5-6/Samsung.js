const sideMenu = document.getElementById("sideMenu");
const checkBtn = document.getElementById("check-btn");
const closeBtn = document.getElementById("close-btn");

function openSideMenu() {

    sideMenu.style.right="0";
}

function closeSideMenu() {

    sideMenu.style.right="-30%";
}


function registration() {
    const email = document.getElementById('remail').value;
    const password = document.getElementById('rpw').value;
    const confirmPassword = document.getElementById('cpw').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    const userData = {
        email: email,
        password: password
    };
    localStorage.setItem('user', JSON.stringify(userData));
    alert('Registration successful!');

    setTimeout(() => {
        window.location.href = 'SamsungHome.html';
    }, 2000);
    return true;
}

function login() {
    const email = document.getElementById('lemail').value;
    const password = document.getElementById('lpw').value;

    const storedUserData = JSON.parse(localStorage.getItem('user'));

    if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
        alert('Login successful!');

        setTimeout(() => {
            window.location.href = 'SamsungHome.html';
        }, 2000);
        return true;

    } else {
        alert('Invalid email or password.');
        return false;
    }
}

function showDetails() {
    const storedUserData = JSON.parse(localStorage.getItem('user'));
    if (storedUserData) {
        alert(`Email: ${storedUserData.email}\nPassword: ${storedUserData.password}`);
    } else {
    }
}
