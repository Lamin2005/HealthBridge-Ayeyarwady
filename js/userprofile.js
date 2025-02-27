const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    toggleBtn.textContent = sidebar.classList.contains('open') ? '✖' : '☰';
});

document.addEventListener('DOMContentLoaded', () => {
const storedImage = localStorage.getItem('uploadedImage');
if (storedImage) displayImage(storedImage);
});
const fileInput = document.getElementById('fileInput');
const profileImageContainer = document.getElementById('profileImage');
const resetBtn = document.getElementById('resetBtn');

// Load profile image on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
const users = JSON.parse(localStorage.getItem('users')) || [];
const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

if (loggedInUser && loggedInUser.id) {
    const user = users.find(u => u.id === loggedInUser.id);
    if (user && user.imgName) {
        displayImage(user.imgName);
    } else {
        resetToDefaultImage();
    }
} else {
    resetToDefaultImage();
}
});

// Handle image upload
fileInput.addEventListener('change', (event) => {
const file = event.target.files[0];
if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const imageData = e.target.result;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

        if (loggedInUser && loggedInUser.id) {
            const user = users.find(u => u.id === loggedInUser.id);
            if (user) {
                user.imgName = imageData; // Store image in user's record
                localStorage.setItem('users', JSON.stringify(users));
            }
        }

        displayImage(imageData); // Display uploaded image
    };
    reader.readAsDataURL(file);
}
});

// Handle reset button click
resetBtn.addEventListener('click', () => {
const users = JSON.parse(localStorage.getItem('users')) || [];
const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

if (loggedInUser && loggedInUser.id) {
    const user = users.find(u => u.id === loggedInUser.id);
    if (user && user.imgName) {
        delete user.imgName; // Remove user's stored image
        localStorage.setItem('users', JSON.stringify(users));
    }
}

resetToDefaultImage(); // Reset to default image
});

// Sign out user
document.getElementById('signout').addEventListener('click', () => {
sessionStorage.removeItem('loggedInUser');
window.location.href = 'index.html';
});

// Display uploaded or stored image
function displayImage(imageData) {
profileImageContainer.innerHTML = `<img src="${imageData}" alt="Profile Image">`;
}

// Reset to default profile image
function resetToDefaultImage() {
profileImageContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
    <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
</svg>`;
}

document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const bmiData = JSON.parse(localStorage.getItem("bmi")) || [];

    if (loggedInUser && bmiData.length > 0) {
        const userBmiRecords = bmiData.filter(record => record.id === loggedInUser.id);
        if (userBmiRecords.length > 1) {
            const firstEntry =userBmiRecords[0];
            const lastEntry = userBmiRecords[userBmiRecords.length - 1];
            const bmiDifference = (lastEntry.bmi - firstEntry.bmi).toFixed(2);
            const daysDifference = Math.round((new Date(lastEntry.date) - new Date(firstEntry.date)) / (1000 * 60 * 60 * 24));
            
            document.getElementById("bmiValue").textContent = `${parseFloat(lastEntry.bmi).toFixed(2)} kg/m²`;                    
            document.getElementById("bmiDifference").textContent = `${daysDifference} days အကြာ ပြန်လည်ပြောင်းလဲမှု: ${bmiDifference} kg/m²`;
        } else if (userBmiRecords.length === 1) {
            document.getElementById("bmiValue").textContent = `${parseFloat(userBmiRecords[0].bmi).toFixed(2)} kg/m²`;
            document.getElementById("bmiDifference").textContent = "No previous record for comparison";
        } else {
            document.getElementById("bmiValue").textContent = "No data available";
            document.getElementById("bmiDifference").textContent = "";
        }
    } else {
        document.getElementById("bmiValue").textContent = "No data available";
        document.getElementById("bmiDifference").textContent = "";
    }
});




document.addEventListener("DOMContentLoaded", function () {

    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const calorieData = JSON.parse(localStorage.getItem("calories")) || [];


    if (loggedInUser && calorieData.length > 0) {
        const usercalorieRecords = calorieData.filter(record => record.id === loggedInUser.id);
        if (usercalorieRecords.length > 1) {
            const firstEntry =usercalorieRecords[0];
            const lastEntry = usercalorieRecords[usercalorieRecords.length - 1];
            const calorieDifference = (lastEntry.bmr - firstEntry.bmr).toFixed(2);
            const daysDifference = Math.round((new Date(lastEntry.date) - new Date(firstEntry.date)) / (1000 * 60 * 60 * 24));
            
            document.getElementById("calorieValue").textContent = `${parseFloat(lastEntry.bmr).toFixed(2)} kcal`;                    
            document.getElementById("calorieDifference").textContent = `${daysDifference} days အကြာ ပြန်လည်ပြောင်းလဲမှု: ${calorieDifference} kcal`;
        } else if (usercalorieRecords.length === 1) {
            document.getElementById("calorieValue").textContent = `${parseFloat(usercalorieRecords[0].bmr).toFixed(2)} kg/m²`;
            document.getElementById("calorieDifference").textContent = "No previous record for comparison";
        } else {
            document.getElementById("calorieValue").textContent = "No data available";
            document.getElementById("calorieDifference").textContent = "";
        }
    } else {
        document.getElementById("calorieValue").textContent = "No data available";
        document.getElementById("calorieDifference").textContent = "";
    }
});






document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const heartData = JSON.parse(localStorage.getItem("heartRates")) || [];

    if (loggedInUser && heartData.length > 0) {
        const userheartRecords = heartData.filter(record => record.id === loggedInUser.id);
        if (userheartRecords.length > 1) {
            const firstEntry =userheartRecords[0];
            const lastEntry = userheartRecords[userheartRecords.length - 1];
            const heartDifference = lastEntry.bpm - firstEntry.bpm;
            const daysDifference = Math.round((new Date(lastEntry.date) - new Date(firstEntry.date)) / (1000 * 60 * 60 * 24));
            
            document.getElementById("heartRateValue").textContent = `${lastEntry.bpm}bmp`;                    
            document.getElementById("heartRateDifference").textContent = `${daysDifference} days အကြာ ပြန်လည်ပြောင်းလဲမှု: ${heartDifference} bmp`;
        } else if (userheartRecords.length === 1) {
            document.getElementById("heartRateValue").textContent = `${userheartRecords[0].bpm} bmp`;
            document.getElementById("heartRateDifference").textContent = "No previous record for comparison";
        } else {
            document.getElementById("heartRateValue").textContent = "No data available";
            document.getElementById("heartRateDifference").textContent = "";
        }
    } else {
        document.getElementById("heartRateValue").textContent = "No data available";
        document.getElementById("heartRateDifference").textContent = "";
    }
});






