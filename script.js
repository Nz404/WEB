const body = document.querySelector("body"),
      modeText = body.querySelector(".mode-text"),
      modeSwitch = body.querySelector(".toggle");


      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "Light Mode"
        }else{
            modeText.innerText = "Dark Mode"
        }
      });


document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Replace these with your valid username and password
    var validUsername = "admin";
    var validPassword = "admin";



    // Check if the entered credentials are correct
    if (username === validUsername && password === validPassword) {
        // Redirect to a welcome page or perform other actions
        alert("Login successfully"),
        window.location.href = "dashboard/index.html";
    } else {
        // Display an error message
        alert("Username or password is worng!!!");
    }
});