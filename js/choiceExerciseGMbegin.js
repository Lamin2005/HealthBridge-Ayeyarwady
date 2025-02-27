
const plans = [
    {
        gender: "Male",
        type: "Full Body",
        description: "Complete workout for every muscle group(Male)",
        link: "ChooseDay.html"
    },
    {
        gender: "Female",
        type: "Full Body",
        description: "Complete workout for every muscle group(Female)",
        link: "Choose_Day.html"
    },
    {
        gender: "Male",
        type: "Arm",
        description: "Strengthen your arms with targeted exercises",
        link: "ArmChooseDay.html"
    },
    {
        gender: "Female",
        type: "Arm",
        description: "Strengthen your arms with targeted exercises",
        link: "ArmChooseDayG.html"
    },
    {
        gender: "Male",
        type: "Leg",
        description: "Build stronger legs with a focused workout(Male)",
        link: "LegChooseDayB.html"
    },
    {
        gender: "Female",
        type: "Leg",
        description: "Build stronger legs with a focused workout(female)",
        link: "LegChooseDayG.html"
    },
    {
        gender: "Male",
        type: "Back",
        description: "Improve your back strength with these exercises",
        link: "back-plan.html"
    },
    {
        gender: "Female",
        type: "Back",
        description: "Improve your back strength with these exercises",
        link: "back-plan.html"
    },
    {
        gender: "Male",
        type: "Chest",
        description: "Develop a powerful chest with these workouts",
        link: "chest-plan.html"
    },
    {
        gender: "Female",
        type: "Chest",
        description: "Develop a powerful chest with these workouts",
        link: "chest-plan.html"
    },
    {
        gender: "Male",
        type: "Belly",
        description: "Tone your abs with these belly workouts",
        link: "BellyChooseDayB.html"
    },
    {
        gender: "Female",
        type: "Belly",
        description: "Tone your abs with these belly workouts",
        link: "BellyChooseDayG.html"
    }
];

// Function to display plans
function displayPlans(plansToShow) {
    const eventContainer = document.getElementById('event-container');
    eventContainer.innerHTML = ''; // Clear previous content
    plansToShow.forEach((plan, index) => {
        const planCard = `
            <div class="plan-card">
                <h3>${plan.type} Plan</h3>
                <p>${plan.description}</p>
                <button id="btn-${plan.gender}-${plan.type}-${index}" class="deal-btn" 
                    onclick="handleButtonClick('${plan.type}', '${plan.link}','${plan.gender}')">
                    View Deal
                </button>
            </div>
        `;
        eventContainer.innerHTML += planCard;
    });
}
function handleButtonClick(planType, planLink, planGender) {
    // Get logged-in user from session storage
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        alert("No user logged in.");
        window.location.href = "signin.html"; // Go to default link
        return;
    }

    const userId = loggedInUser.id; // Assuming user object has an 'id' field

    // Get users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the logged-in user in local storage
    const user = users.find(u => u.id === userId);

    if (!user) {
        alert("User not found in the system.");
        window.location.href = planLink; // Go to default link
        return;
    }
   
    // Check if planType and user.types[planType] are defined
    if (planType == "Full Body" && planGender == "Male") {
        if (planType !== undefined && user.types) {
            const value = user.types.Full_Body_Male; // Get the value of the type
            console.log(value);
            if (value == "1") {
                window.location.href = "ChooseDay2.html"; // Change to your first page
            } else if (value == "2") {
                window.location.href = "ChooseDay3.html"; // Change to your second page
            } else {
                window.location.href = planLink; // Default page
            }
        }
        else {
            window.location.href = planLink; // Go to default if type not found
        }
    }  
    else if (planType == "Full Body" && planGender == "Female") {
        if (planType !== undefined && user.types) {
            const value = user.types.Full_Body_Female; // Get the value of the type
            console.log(value);
            if (value == "1") {
                window.location.href = "Choose_Day2.html"; // Change to your first page
            } else if (value == "2") {
                window.location.href = "Choose_Day3.html"; // Change to your second page
            } else {
                window.location.href = planLink; // Default page
            }
        }
        else {
            window.location.href = planLink; // Go to default if type not found
        }
    }

    else if (planType == "Arm" && planGender == "Male") {
        if (planType !== undefined && user.types && user.types[planType] !== undefined) {
            const value = user.types[planType]; // Get the value of the type
    
            if (value == 1) {
                window.location.href = "ArmChooseDay2.html"; // Change to your first page
            } else if (value == 2) {
                window.location.href = "ArmChooseDay3.html"; // Change to your second page
            } else {
                window.location.href = planLink; // Default page
            }
        }
        else {
            window.location.href = planLink; // Go to default if type not found
        }
    }
    else if (planType == "Arm" && planGender == "Female") {
        if (planType !== undefined && user.types && user.types[planType] !== undefined) {
            const value = user.types[planType]; // Get the value of the type
    
            if (value == 1) {
                window.location.href = "ArmChooseDayG2.html"; // Change to your first page
            } else if (value == 2) {
                window.location.href = "ArmChooseDayG3.html"; // Change to your second page
            } else {
                window.location.href = planLink; // Default page
            }
        }
        else {
            window.location.href = planLink; // Go to default if type not found
        }
    }
    
    else if (planType == "Leg" && planGender == "Male") {
        if (planType !== undefined && user.types && user.types[planType] !== undefined) {
            const value = user.types[planType]; // Get the value of the type
    
            if (value == 1) {
                window.location.href = "LegChooseDayB2.html"; // Change to your first page
            } else if (value == 2) {
                window.location.href = "LegChooseDayB3.html"; // Change to your second page
            } else {
                window.location.href = planLink; // Default page
            }
        }
        else {
            window.location.href = planLink; // Go to default if type not found
        }
    }
    else if (planType == "Leg" && planGender == "Female") {
        if (planType !== undefined && user.types && user.types[planType] !== undefined) {
            const value = user.types[planType]; // Get the value of the type
    
            if (value == 1) {
                window.location.href = "LegChooseDayG2.html"; // Change to your first page
            } else if (value == 2) {
                window.location.href = "LegChooseDayG3.html"; // Change to your second page
            } else {
                window.location.href = planLink; // Default page
            }
        }
        else {
            window.location.href = planLink; // Go to default if type not found
        }
    }
    else if (planType == "Back" && planGender == "Male") {
        if (planType !== undefined && user.types && user.types[planType] !== undefined) {
            const value = user.types[planType]; // Get the value of the type
    
            if (value == 1) {
                window.location.href = "page1.html"; // Change to your first page
            } else if (value == 2) {
                window.location.href = "page2.html"; // Change to your second page
            } else {
                window.location.href = planLink; // Default page
            }
        }
        else {
            window.location.href = planLink; // Go to default if type not found
        }
    }  
    else if (planType == "Back" && planGender == "Female") {
        if (planType !== undefined && user.types && user.types[planType] !== undefined) {
            const value = user.types[planType]; // Get the value of the type
    
            if (value == 1) {
                window.location.href = "page1.html"; // Change to your first page
            } else if (value == 2) {
                window.location.href = "page2.html"; // Change to your second page
            } else {
                window.location.href = planLink; // Default page
            }
        }
        else {
            window.location.href = planLink; // Go to default if type not found
        }
    }

    else if (planType == "Chest" && planGender == "Male") {
        if (planType !== undefined && user.types && user.types[planType] !== undefined) {
            const value = user.types[planType]; // Get the value of the type
    
            if (value == 1) {
                window.location.href = "page1.html"; // Change to your first page
            } else if (value == 2) {
                window.location.href = "page2.html"; // Change to your second page
            } else {
                window.location.href = planLink; // Default page
            }
        }
        else {
            window.location.href = planLink; // Go to default if type not found
        }
    }
    else if (planType == "Chest" && planGender == "Female") {
        if (planType !== undefined && user.types && user.types[planType] !== undefined) {
            const value = user.types[planType]; // Get the value of the type
    
            if (value == 1) {
                window.location.href = "page1.html"; // Change to your first page
            } else if (value == 2) {
                window.location.href = "page2.html"; // Change to your second page
            } else {
                window.location.href = planLink; // Default page
            }
        }
        else {
            window.location.href = planLink; // Go to default if type not found
        }
    }
    
    else if (planType == "Belly" && planGender == "Male") {
        if (planType !== undefined && user.types && user.types[planType] !== undefined) {
            const value = user.types[planType]; // Get the value of the type
    
            if (value == 1) {
                window.location.href = "BellyChooseDayB2.html"; // Change to your first page
            } else if (value == 2) {
                window.location.href = "BellyChooseDayB3.html"; // Change to your second page
            } else {
                window.location.href = planLink; // Default page
            }
        }
        else {
            window.location.href = planLink; // Go to default if type not found
        }
    }
    else if (planType == "Belly" && planGender == "Female") {
        if (planType !== undefined && user.types && user.types[planType] !== undefined) {
            const value = user.types[planType]; // Get the value of the type
    
            if (value == 1) {
                window.location.href = "BellyChooseDayG2.html"; // Change to your first page
            } else if (value == 2) {
                window.location.href = "BellyChooseDayG3.html"; // Change to your second page
            } else {
                window.location.href = planLink; // Default page
            }
        }
        else {
            window.location.href = planLink; // Go to default if type not found
        }
    }
  
  
}


// Filter function based on user selection
function filterPlans() {
    const genderFilter = document.getElementById('gender-filter').value;
    const sportFilter = document.getElementById('sport-filter').value;

    const filteredPlans = plans.filter(plan => {
        return (genderFilter === "all-gender" || plan.gender === genderFilter) && 
               (sportFilter === "all-training" ||  plan.type === sportFilter);
    });

    displayPlans(filteredPlans);
}

// Event listeners for filters
document.getElementById('gender-filter').addEventListener('change', filterPlans);
document.getElementById('sport-filter').addEventListener('change', filterPlans);

// Initial display of all plans
displayPlans(plans);