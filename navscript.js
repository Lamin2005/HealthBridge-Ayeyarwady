document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.getElementById('nav-links');
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser')); // Get logged-in user object from session storage

    if (loggedInUser) {
        const { id } = loggedInUser; // Extract user ID
        const users = JSON.parse(localStorage.getItem('users')) || []; // Get users array from local storage
        const userData = users.find(user => user.id === id); // Find the user by ID in local storage

        if (userData) {
            const { name, imgName } = userData; // Extract name and image URL from local storage user data

            // Ensure there is a default image if the image URL is not available
            const userImage = imgName || 'images/userdefault.jpg'; // Replace with your default image path

            navLinks.innerHTML = `
                <div class="user-info" class="nav-link">
                    <img src="${userImage}" class="user-image" id="userImage"  />
                    <span class="user-name" id="userName">${name}</span>
                </div>
            `;

            // Add click event listener to redirect to the user profile
            const userInfoDiv = document.querySelector('.user-info');
            userInfoDiv.addEventListener('click', () => {
                window.location.href = 'userprofile.html';
            });
        } else {
            // If user is not found in local storage, redirect to sign-in
            navLinks.innerHTML = `
                <a href="signin.html" class="nav-link" data-key="signin" >အကောင့်ဖွင့်ရန်</a>
            `;
        }
    } else {
        navLinks.innerHTML = `
            <a href="signin.html" class="nav-link" data-key="signin">အကောင့်ဖွင့်ရန်</a>
        `;
    }
});
