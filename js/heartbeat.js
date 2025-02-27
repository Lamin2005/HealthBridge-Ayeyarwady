
let selectedGender = "";
let selectedExercise = "";

function selectGender(gender, element) {
    document.querySelectorAll('.gender-option').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    selectedGender = gender;
}

function selectExercise(element, value) {
    document.querySelectorAll('.exercise-option').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    selectedExercise = value;
}

function updateBpmValue() {
    document.getElementById('bpmValue').innerText = document.getElementById('bpm').value;
}

function calculateHeartRateStatus() {
    let bpm = parseInt(document.getElementById('bpm').value);
  
    if (!selectedGender || !selectedExercise) {
        alert("Please select gender and exercise level.");
        return;
    }

    // Get logged-in user from session storage
    let loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

    // Get users array from local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (loggedInUser && users.length > 0) {
        // Find user in local storage with matching ID
        let matchedUser = users.find(user => user.id === loggedInUser.id);

        if (matchedUser) {
            // Get current date and time
            let currentDateTime = new Date().toLocaleString();

            // Store ID, heart rate, and date-time in local storage
            let heartRateData = JSON.parse(localStorage.getItem('heartRates')) || [];
            heartRateData.push({ 
                id: matchedUser.id, 
                bpm: bpm, 
                date: currentDateTime 
            });
            localStorage.setItem('heartRates', JSON.stringify(heartRateData));
        }
    }

    // Heart rate validation
    if (selectedGender === "male") {
        if (bpm < 60 || bpm > 100) {
            alert("Your heart rate is abnormal.");
        } else {
            alert(`Your heart rate is normal considering you are doing ${selectedExercise} exercise.`);
        }
    } else {
        if (bpm < 60 || bpm > 110) {
            alert("Your heart rate is abnormal.");
        } else {
            alert(`Your heart rate is normal considering you are doing ${selectedExercise} exercise.`);
        }
    }

    window.location.href = "healthytools.html";
}


