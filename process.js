
const loginBtn = document.getElementById("loginBtn");
const loginPopup = document.getElementById("loginPopup");
const homeBtn = document.getElementById("homeBtn");

const adminLink = document.getElementById("adminLink");
const backToUser = document.getElementById("backToUser");

// Open Login Popup
loginBtn.addEventListener("click", function(event) {
    event.preventDefault();

    loginPopup.classList.add("active");
    loginPopup.classList.remove("show-admin");
});

// Close Login Popup using Home
homeBtn.addEventListener("click", function(event) {
    event.preventDefault();

    loginPopup.classList.remove("active");
    loginPopup.classList.remove("show-admin");
});

// Switch to Admin Login
adminLink.addEventListener("click", function(event) {
    event.preventDefault();

    loginPopup.classList.add("show-admin");
});

// Switch back to User Login
backToUser.addEventListener("click", function(event) {
    event.preventDefault();

    loginPopup.classList.remove("show-admin");
});
