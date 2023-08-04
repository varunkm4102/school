

const regWarning = document.getElementById("reg-war");
const signForm = document.getElementById("sign-form");

// Function to set a cookie with a given name, value, and expiration date
function setCookie(name, value, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get the value of a cookie by name
function getCookie(name) {
    const cookieName = name + "=";
    const cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

// Function to handle sign-up form submission
function handleSignupFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the input values
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Save the user credentials (you may use a secure backend or database for this in a real application)
    setCookie("username", newUsername, 365); // Set the username cookie to expire in 1 year
    setCookie("password", newPassword, 365); // Set the password cookie to expire in 1 year

    regWarning.innerHTML="You Are Successfully Registered!";
    setTimeout(function() {
        signForm.reset(); 
        regWarning.style.display = "none";
      }, 3000); 
};

// Function to handle login form submission
function handleLoginFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Retrieve the saved user credentials from cookies
    const savedUsername = getCookie("username");
    const savedPassword = getCookie("password");

    // Compare the entered credentials with the saved credentials
    if (username == savedUsername && password ==savedPassword) {
        // Set a cookie to indicate that the user is logged in (you can use a more secure method for real applications)
        setCookie("loggedIn", "true", 30); // The cookie will expire in 30 day

        // Redirect the user to the home page or any other protected page
        window.location.href = "index.html"; // Replace "home.html" with your actual protected page
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Add event listeners to the forms for form submission
document.getElementById("signupForm").addEventListener("click", handleSignupFormSubmit);
document.getElementById("loginForm").addEventListener("click", handleLoginFormSubmit);


const loginDisplay = document.getElementById("login-con");
const signDisplay = document.getElementById("sign-con");
const regButton = document.getElementById("reg-con");
const signCon = document.getElementById("al-con");

regButton.addEventListener("click", ()=>{
    loginDisplay.style.display = "none";
    signDisplay.style.display = "block";
});


signCon.addEventListener("click", ()=>{
    loginDisplay.style.display = "block";
    signDisplay.style.display = "none";
})


