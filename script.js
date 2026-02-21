// ⚠️ This is FRONTEND-ONLY authentication.
// Not secure for production use.

document.addEventListener("DOMContentLoaded", function () {

    // REGISTER
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("registerEmail").value;
            const password = document.getElementById("registerPassword").value;

            const user = {
                email: email,
                password: password
            };

            localStorage.setItem("user", JSON.stringify(user));

            document.getElementById("registerMessage").textContent = "Registration Successful!";
        });
    }

    // LOGIN
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (storedUser && storedUser.email === email && storedUser.password === password) {
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "dashboard.html";
            } else {
                document.getElementById("loginMessage").textContent = "Invalid Credentials!";
            }
        });
    }

    // PROTECT DASHBOARD
    if (window.location.pathname.includes("dashboard.html")) {
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (!isLoggedIn) {
            window.location.href = "index.html";
        }
    }
});

// LOGOUT FUNCTION
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}