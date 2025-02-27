document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('username');
    const emailElement = document.getElementById('useremail');

    // Retrieve the 'loggedInUser' data from sessionStorage
    const loginUserData = sessionStorage.getItem('loggedInUser');

    if (!loginUserData) {
        alert('You must be signed in to view your profile.');
        window.location.href = 'signin.html';
        return;
    }

    // Parse the loggedInUser data
    let loggedInUser;
    try {
        loggedInUser = JSON.parse(loginUserData);
    } catch (error) {
        console.error('Error parsing loggedInUser data:', error);
        alert('Invalid session data. Please sign in again.');
        window.location.href = 'signin.html';
        return;
    }

    const loggedInUserEmail = loggedInUser?.email || loggedInUser[0]?.email;

    if (!loggedInUserEmail) {
        alert('You must be signed in to view your profile.');
        window.location.href = 'signin.html';
        return;
    }

    // Retrieve the users array from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = users.find(user => user.email === loggedInUserEmail);

    if (currentUser) {
        nameElement.textContent = currentUser.name;
        emailElement.textContent = currentUser.email;
    } else {
        alert('Error loading profile information. User not found.');
        window.location.href = 'signin.html';
    }
});
