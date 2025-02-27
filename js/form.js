function togglePassword(id, icon) {
    let input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
        icon.innerHTML = "👁️"; // Open eye
    } else {
        input.type = "password";
        icon.innerHTML = "👁️‍🗨️"; // Closed eye
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const profileImg = document.getElementById("profile-img"); 
    const profileName = document.querySelector(".namediv h3:nth-child(1)");
    const profileEmail = document.querySelector(".namediv h3:nth-child(2)");
    const updateButton = document.createElement("button");
    const backButton = document.createElement("button");
    backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Back'; // FontAwesome arrow
    backButton.className = "back-btn";
    const editButton = document.getElementById("edit-btn"); 



    backButton.addEventListener("click", function () {
        window.history.back();
    });

    
    // Add the button to the body
    document.body.prepend(backButton);

    updateButton.textContent = "Update";
    updateButton.disabled = true;
    updateButton.className = "submit-btn";
    updateButton.style.background = "#e0e0e0";
    updateButton.style.cursor = "not-allowed";

    document.querySelector(".container").appendChild(updateButton);
    document.querySelector(".container").appendChild(backButton);

    function loadUserData() {
        if (loggedInUser) {
            const user = users.find(user => user.id === loggedInUser.id);
            if (user) {
                usernameInput.value = user.name;
                emailInput.value = user.email;
                passwordInput.value = user.password;
                
                profileName.textContent = user.name;
                profileEmail.textContent = user.email;
                profileImg.src = user.imgName ? user.imgName : "../images/userdefault.jpg";

                usernameInput.readOnly = true;
                emailInput.readOnly = true;
                passwordInput.readOnly = true;
            }
        }
    }

    loadUserData(); // Load user data on page load

    if (editButton) {
        editButton.addEventListener("click", function () {
            usernameInput.readOnly = false;
            emailInput.readOnly = false;
            passwordInput.readOnly = false;
            
            updateButton.disabled = false;
            updateButton.style.background = "#28a745";
            updateButton.style.color = "#fff";
            updateButton.style.cursor = "pointer";
        });
    } else {
        console.error("Edit button not found!");
    }

    updateButton.addEventListener("click", function () {
        if (loggedInUser) {
            const userIndex = users.findIndex(user => user.id === loggedInUser.id);
            
            if (userIndex !== -1) {
                users[userIndex].name = usernameInput.value;
                users[userIndex].email = emailInput.value;
                users[userIndex].password = passwordInput.value;

                localStorage.setItem("users", JSON.stringify(users));
                alert("User details updated successfully!");

                // ✅ Update the displayed data immediately
                loadUserData();  

                // Disable inputs again
                usernameInput.readOnly = true;
                emailInput.readOnly = true;
                passwordInput.readOnly = true;

                updateButton.disabled = true;
                updateButton.style.background = "#e0e0e0";
                updateButton.style.cursor = "not-allowed";
            }
        }
    });
});
