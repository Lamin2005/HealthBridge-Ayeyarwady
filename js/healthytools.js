
document.addEventListener('DOMContentLoaded', function () {
    const arrows = document.querySelectorAll('.responsive-arrow');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', function () {
            const button = this.previousElementSibling; // Get the button before the arrow
            if (button && button.tagName === 'A') {
                window.location.href = button.href; // Navigate to the button's link
            }
        });
    });

    const bmi = document.getElementById("bmi");
    const bmr = document.getElementById("bmr");
    const heart_checker = document.getElementById("heart_checker");
    const user = sessionStorage.getItem("loggedInUser");
    const users = JSON.parse(localStorage.getItem('users')) || [];
   
    bmi.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
            
        // Check if user is logged in (assuming 'loggedInUser' key in session storage)
    
        if (user) {
            // If user data exists, redirect to the next page
            window.location.href = "bmicalculator.html";  
        } else {
            if (confirm("You need to log in first! Do you want to go to the login page?")) {
                window.location.href = "signin.html"; // Redirect to login page
            }
        }
    });
/*
    function displayBMI() {
        let loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
        if (!loggedInUser || !loggedInUser.id) {
            console.error("No logged-in user found!");
            return;
        }
    
        let userId = loggedInUser.id; // Get user ID
        let bmiRecords = JSON.parse(localStorage.getItem("bmi")) || [];
    
        // Filter only records of the logged-in user
        let userBMIRecords = bmiRecords.filter(record => record.id === userId);
    
        // Display BMI results
        let displayArea = document.getElementById("bmiResults");
        displayArea.innerHTML = ""; // Clear previous results
    
        if (userBMIRecords.length === 0) {
            displayArea.innerHTML = "";
            return;
        }
    
        userBMIRecords.forEach(record => {
            let bmiEntry = document.createElement("p");
            bmiEntry.textContent = `BMI: ${record.bmi} (Date: ${record.date})`;
            displayArea.appendChild(bmiEntry);
        });
/*
        let table = document.createElement("table");
        let header = table.createTHead();
        let headerRow = header.insertRow(0);
        headerRow.insertCell(0).textContent = "BMI Value";
        headerRow.insertCell(1).textContent = "Date";
    
        let tbody = table.createTBody();
        userBMIRecords.forEach(record => {
            let row = tbody.insertRow();
            row.insertCell(0).textContent = record.bmi;
            row.insertCell(1).textContent = record.date;
        });
    
        // Append the table to the display area
        displayArea.appendChild(table);
        }
    window.onload = displayBMI;   

  

*/ 
    
    bmr.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
    
        if (user) {
            // If user data exists, redirect to the next page
            window.location.href = "calories.html";  
        } else {
            if (confirm("You need to log in first! Do you want to go to the login page?")) {
                window.location.href = "signin.html"; // Redirect to login page
            }
        }
    });

    heart_checker.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
    
        if (user) {
            // If user data exists, redirect to the next page
            window.location.href = "heartbeat.html";  
        } else {
            if (confirm("You need to log in first! Do you want to go to the login page?")) {
                window.location.href = "signin.html"; // Redirect to login page
            }
        }
    });

   
    document.getElementById("diabetes1").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Retrieve and parse sessionStorage data
        const sessionData = sessionStorage.getItem("loggedInUser");
        const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

        // Retrieve and parse localStorage data
        const localData = localStorage.getItem("Paymentusers");
        const paymentUsers = localData ? JSON.parse(localData) : [];

        // Ensure session data exists
        if (!loggedInUser || !loggedInUser.id) {
            alert("You need to log in first!");
            window.location.href = "signin.html";
            return;
        }

        // Find the user in the localStorage array (ensuring ID comparison works)
        const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

        if (matchedUser) {
            if (matchedUser.account === "standard" && matchedUser.status === "approved") {
                window.location.href = "diabetes.html";
            }
             else {
                alert("Your payment is under review. Please wait for the admin's approval.");
                return;
            }
        } else {
            if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
                window.location.href = "pricing.html"; // Redirect to pricing page
            }
        }
    });
    

    document.getElementById("diabetes2").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Retrieve and parse sessionStorage data
        const sessionData = sessionStorage.getItem("loggedInUser");
        const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

        // Retrieve and parse localStorage data
        const localData = localStorage.getItem("Paymentusers");
        const paymentUsers = localData ? JSON.parse(localData) : [];

        // Ensure session data exists
        if (!loggedInUser || !loggedInUser.id) {
            alert("You need to log in first!");
            window.location.href = "signin.html";
            return;
        }

        // Find the user in the localStorage array (ensuring ID comparison works)
        const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

        if (matchedUser) {
            if ( matchedUser.account === "standard"  && matchedUser.status === "approved") {
                window.location.href = "diabetes.html";
            }
             else {
                alert("Your payment is under review. Please wait for the admin's approval.");
                return;
            }
        } else {
            if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
                window.location.href = "pricing.html"; // Redirect to pricing page
            }
        }
    });

    document.getElementById("heart1").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Retrieve and parse sessionStorage data
        const sessionData = sessionStorage.getItem("loggedInUser");
        const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

        // Retrieve and parse localStorage data
        const localData = localStorage.getItem("Paymentusers");
        const paymentUsers = localData ? JSON.parse(localData) : [];

        // Ensure session data exists
        if (!loggedInUser || !loggedInUser.id) {
            alert("You need to log in first!");
            window.location.href = "signin.html";
            return;
        }

        // Find the user in the localStorage array (ensuring ID comparison works)
        const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

        if (matchedUser) {
            if (matchedUser.account === "standard"  && matchedUser.status === "approved") {
                window.location.href = "heartdisease.html";
            }
             else {
                alert("Your payment is under review. Please wait for the admin's approval.");
                return;
            }
        } else {
            if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
                window.location.href = "pricing.html"; // Redirect to pricing page
            }
        }
    });

    document.getElementById("heart2").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Retrieve and parse sessionStorage data
    const sessionData = sessionStorage.getItem("loggedInUser");
    const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

    // Retrieve and parse localStorage data
    const localData = localStorage.getItem("Paymentusers");
    const paymentUsers = localData ? JSON.parse(localData) : [];

    // Ensure session data exists
    if (!loggedInUser || !loggedInUser.id) {
        alert("You need to log in first!");
        window.location.href = "signin.html";
        return;
    }

    // Find the user in the localStorage array (ensuring ID comparison works)
    const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

    if (matchedUser) {
        if ( matchedUser.account === "standard" && matchedUser.status === "approved") {
            window.location.href = "heartdisease.html";
        }
         else {
            alert("Your payment is under review. Please wait for the admin's approval.");
            return;
        }
    } else {
        if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
            window.location.href = "pricing.html"; // Redirect to pricing page
        }
    }
    });

    
    document.getElementById("bone1").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Retrieve and parse sessionStorage data
        const sessionData = sessionStorage.getItem("loggedInUser");
        const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

        // Retrieve and parse localStorage data
        const localData = localStorage.getItem("Paymentusers");
        const paymentUsers = localData ? JSON.parse(localData) : [];

        // Ensure session data exists
        if (!loggedInUser || !loggedInUser.id) {
            alert("You need to log in first!");
            window.location.href = "signin.html";
            return;
        }

        // Find the user in the localStorage array (ensuring ID comparison works)
        const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

        if (matchedUser) {
            if ( matchedUser.account === "standard" || matchedUser.account === "premium" && matchedUser.status === "approved") {
                window.location.href = "diabetes.html";
            }
             else {
                alert("Your payment is under review. Please wait for the admin's approval.");
                return;
            }
        } else {
            if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
                window.location.href = "pricing.html"; // Redirect to pricing page
            }
        }
    });
    

    document.getElementById("bone2").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Retrieve and parse sessionStorage data
        const sessionData = sessionStorage.getItem("loggedInUser");
        const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

        // Retrieve and parse localStorage data
        const localData = localStorage.getItem("Paymentusers");
        const paymentUsers = localData ? JSON.parse(localData) : [];

        // Ensure session data exists
        if (!loggedInUser || !loggedInUser.id) {
            alert("You need to log in first!");
            window.location.href = "signin.html";
            return;
        }

        // Find the user in the localStorage array (ensuring ID comparison works)
        const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

        if (matchedUser) {
            if (matchedUser.account === "standard" || matchedUser.account === "premium" && matchedUser.status === "approved") {
                window.location.href = "diabetes.html";
            }
             else {
                alert("Your payment is under review. Please wait for the admin's approval.");
                return;
            }
        } else {
            if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
                window.location.href = "pricing.html"; // Redirect to pricing page
            }
        }
    });

    document.getElementById("d1").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Retrieve and parse sessionStorage data
        const sessionData = sessionStorage.getItem("loggedInUser");
        const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

        // Retrieve and parse localStorage data
        const localData = localStorage.getItem("Paymentusers");
        const paymentUsers = localData ? JSON.parse(localData) : [];

        // Ensure session data exists
        if (!loggedInUser || !loggedInUser.id) {
            alert("You need to log in first!");
            window.location.href = "signin.html";
            return;
        }

        // Find the user in the localStorage array (ensuring ID comparison works)
        const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

        if (matchedUser) {
            if ( matchedUser.account === "standard" || matchedUser.account === "premium" && matchedUser.status === "approved") {
                window.location.href = "heartdisease.html";
            }
             else {
                alert("Your payment is under review. Please wait for the admin's approval.");
                return;
            }
        } else {
            if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
                window.location.href = "pricing.html"; // Redirect to pricing page
            }
        }
    });

    
    document.getElementById("d2").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Retrieve and parse sessionStorage data
        const sessionData = sessionStorage.getItem("loggedInUser");
        const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

        // Retrieve and parse localStorage data
        const localData = localStorage.getItem("Paymentusers");
        const paymentUsers = localData ? JSON.parse(localData) : [];

        // Ensure session data exists
        if (!loggedInUser || !loggedInUser.id) {
            alert("You need to log in first!");
            window.location.href = "signin.html";
            return;
        }

        // Find the user in the localStorage array (ensuring ID comparison works)
        const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

        if (matchedUser) {
            if (matchedUser.account === "standard" || matchedUser.account === "premium" && matchedUser.status === "approved") {
                window.location.href = "diabetes.html";
            }
             else {
                alert("Your payment is under review. Please wait for the admin's approval.");
                return;
            }
        } else {
            if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
                window.location.href = "pricing.html"; // Redirect to pricing page
            }
        }
    });
    
    document.getElementById("p1").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Retrieve and parse sessionStorage data
        const sessionData = sessionStorage.getItem("loggedInUser");
        const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

        // Retrieve and parse localStorage data
        const localData = localStorage.getItem("Paymentusers");
        const paymentUsers = localData ? JSON.parse(localData) : [];

        // Ensure session data exists
        if (!loggedInUser || !loggedInUser.id) {
            alert("You need to log in first!");
            window.location.href = "signin.html";
            return;
        }

        // Find the user in the localStorage array (ensuring ID comparison works)
        const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

        if (matchedUser) {
            if (matchedUser.account === "standard" || matchedUser.account === "premium" && matchedUser.status === "approved") {
                window.location.href = "diabetes.html";
            }
             else {
                alert("Your payment is under review. Please wait for the admin's approval.");
                return;
            }
        } else {
            if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
                window.location.href = "pricing.html"; // Redirect to pricing page
            }
        }
    });
    

    
    document.getElementById("p2").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Retrieve and parse sessionStorage data
        const sessionData = sessionStorage.getItem("loggedInUser");
        const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

        // Retrieve and parse localStorage data
        const localData = localStorage.getItem("Paymentusers");
        const paymentUsers = localData ? JSON.parse(localData) : [];

        // Ensure session data exists
        if (!loggedInUser || !loggedInUser.id) {
            alert("You need to log in first!");
            window.location.href = "signin.html";
            return;
        }

        // Find the user in the localStorage array (ensuring ID comparison works)
        const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

        if (matchedUser) {
            if (matchedUser.account === "standard" || matchedUser.account === "premium" && matchedUser.status === "approved") {
                window.location.href = "diabetes.html";
            }
             else {
                alert("Your payment is under review. Please wait for the admin's approval.");
                return;
            }
        } else {
            if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
                window.location.href = "pricing.html"; // Redirect to pricing page
            }
        }
    });

    document.getElementById("eye1").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Retrieve and parse sessionStorage data
        const sessionData = sessionStorage.getItem("loggedInUser");
        const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

        // Retrieve and parse localStorage data
        const localData = localStorage.getItem("Paymentusers");
        const paymentUsers = localData ? JSON.parse(localData) : [];

        // Ensure session data exists
        if (!loggedInUser || !loggedInUser.id) {
            alert("You need to log in first!");
            window.location.href = "signin.html";
            return;
        }

        // Find the user in the localStorage array (ensuring ID comparison works)
        const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

        if (matchedUser) {
            if (matchedUser.account === "standard" || matchedUser.account === "premium" && matchedUser.status === "approved") {
                window.location.href = "heartdisease.html";
            }
             else {
                alert("Your payment is under review. Please wait for the admin's approval.");
                return;
            }
        } else {
            if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
                window.location.href = "pricing.html"; // Redirect to pricing page
            }
        }
    });

    document.getElementById("eye2").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Retrieve and parse sessionStorage data
        const sessionData = sessionStorage.getItem("loggedInUser");
        const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

        // Retrieve and parse localStorage data
        const localData = localStorage.getItem("Paymentusers");
        const paymentUsers = localData ? JSON.parse(localData) : [];

        // Ensure session data exists
        if (!loggedInUser || !loggedInUser.id) {
            alert("You need to log in first!");
            window.location.href = "signin.html";
            return;
        }

        // Find the user in the localStorage array (ensuring ID comparison works)
        const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

        if (matchedUser) {
            if (matchedUser.account === "standard" || matchedUser.account === "premium" && matchedUser.status === "approved") {
                window.location.href = "diabetes.html";
            }
             else {
                alert("Your payment is under review. Please wait for the admin's approval.");
                return;
            }
        } else {
            if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
                window.location.href = "pricing.html"; // Redirect to pricing page
            }
        }
    });

    
    document.getElementById("au1").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Retrieve and parse sessionStorage data
        const sessionData = sessionStorage.getItem("loggedInUser");
        const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

        // Retrieve and parse localStorage data
        const localData = localStorage.getItem("Paymentusers");
        const paymentUsers = localData ? JSON.parse(localData) : [];

        // Ensure session data exists
        if (!loggedInUser || !loggedInUser.id) {
            alert("You need to log in first!");
            window.location.href = "signin.html";
            return;
        }

        // Find the user in the localStorage array (ensuring ID comparison works)
        const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

        if (matchedUser) {
            if (matchedUser.account === "paltinum" || matchedUser.account === "standard" || matchedUser.account === "premium" && matchedUser.status === "approved") {
                window.location.href = "diabetes.html";
            }
             else {
                alert("Your payment is under review. Please wait for the admin's approval.");
                return;
            }
        } else {
            if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
                window.location.href = "pricing.html"; // Redirect to pricing page
            }
        }
    });
    

    document.getElementById("au2").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Retrieve and parse sessionStorage data
        const sessionData = sessionStorage.getItem("loggedInUser");
        const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

        // Retrieve and parse localStorage data
        const localData = localStorage.getItem("Paymentusers");
        const paymentUsers = localData ? JSON.parse(localData) : [];

        // Ensure session data exists
        if (!loggedInUser || !loggedInUser.id) {
            alert("You need to log in first!");
            window.location.href = "signin.html";
            return;
        }

        // Find the user in the localStorage array (ensuring ID comparison works)
        const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

        if (matchedUser) {
            if (matchedUser.account === "paltinum" || matchedUser.account === "standard" || matchedUser.account === "premium" && matchedUser.status === "approved") {
                window.location.href = "diabetes.html";
            }
             else {
                alert("Your payment is under review. Please wait for the admin's approval.");
                return;
            }
        } else {
            if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
                window.location.href = "pricing.html"; // Redirect to pricing page
            }
        }
    });

    document.getElementById("t1").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Retrieve and parse sessionStorage data
        const sessionData = sessionStorage.getItem("loggedInUser");
        const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

        // Retrieve and parse localStorage data
        const localData = localStorage.getItem("Paymentusers");
        const paymentUsers = localData ? JSON.parse(localData) : [];

        // Ensure session data exists
        if (!loggedInUser || !loggedInUser.id) {
            alert("You need to log in first!");
            window.location.href = "signin.html";
            return;
        }

        // Find the user in the localStorage array (ensuring ID comparison works)
        const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

        if (matchedUser) {
            if (matchedUser.account === "paltinum" || matchedUser.account === "standard" || matchedUser.account === "premium" && matchedUser.status === "approved") {
                window.location.href = "heartdisease.html";
            }
             else {
                alert("Your payment is under review. Please wait for the admin's approval.");
                return;
            }
        } else {
            if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
                window.location.href = "pricing.html"; // Redirect to pricing page
            }
        }
    });

    document.getElementById("t2").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Retrieve and parse sessionStorage data
    const sessionData = sessionStorage.getItem("loggedInUser");
    const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

    // Retrieve and parse localStorage data
    const localData = localStorage.getItem("Paymentusers");
    const paymentUsers = localData ? JSON.parse(localData) : [];

    // Ensure session data exists
    if (!loggedInUser || !loggedInUser.id) {
        alert("You need to log in first!");
        window.location.href = "signin.html";
        return;
    }

    // Find the user in the localStorage array (ensuring ID comparison works)
    const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

    if (matchedUser) {
        if (matchedUser.account === "paltinum" || matchedUser.account === "standard" || matchedUser.account === "premium" && matchedUser.status === "approved") {
            window.location.href = "heartdisease.html";
        }
         else {
            alert("Your payment is under review. Please wait for the admin's approval.");
            return;
        }
    } else {
        if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
            window.location.href = "pricing.html"; // Redirect to pricing page
        }
    }
    });

    
    document.getElementById("l1").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Retrieve and parse sessionStorage data
        const sessionData = sessionStorage.getItem("loggedInUser");
        const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

        // Retrieve and parse localStorage data
        const localData = localStorage.getItem("Paymentusers");
        const paymentUsers = localData ? JSON.parse(localData) : [];

        // Ensure session data exists
        if (!loggedInUser || !loggedInUser.id) {
            alert("You need to log in first!");
            window.location.href = "signin.html";
            return;
        }

        // Find the user in the localStorage array (ensuring ID comparison works)
        const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

        if (matchedUser) {
            if (matchedUser.account === "paltinum" || matchedUser.account === "standard" || matchedUser.account === "premium" && matchedUser.status === "approved") {
                window.location.href = "diabetes.html";
            }
             else {
                alert("Your payment is under review. Please wait for the admin's approval.");
                return;
            }
        } else {
            if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
                window.location.href = "pricing.html"; // Redirect to pricing page
            }
        }
    });
    

    document.getElementById("l2").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Retrieve and parse sessionStorage data
        const sessionData = sessionStorage.getItem("loggedInUser");
        const loggedInUser = sessionData ? JSON.parse(sessionData) : null;

        // Retrieve and parse localStorage data
        const localData = localStorage.getItem("Paymentusers");
        const paymentUsers = localData ? JSON.parse(localData) : [];

        // Ensure session data exists
        if (!loggedInUser || !loggedInUser.id) {
            alert("You need to log in first!");
            window.location.href = "signin.html";
            return;
        }

        // Find the user in the localStorage array (ensuring ID comparison works)
        const matchedUser = paymentUsers.find(user => String(user.id) === String(loggedInUser.id));

        if (matchedUser) {
            if (matchedUser.account === "paltinum" || matchedUser.account === "standard" || matchedUser.account === "premium" && matchedUser.status === "approved") {
                window.location.href = "diabetes.html";
            }
             else {
                alert("Your payment is under review. Please wait for the admin's approval.");
                return;
            }
        } else {
            if (confirm("You need to upgrade your account. Do you want to go to the pricing page?")) {
                window.location.href = "pricing.html"; // Redirect to pricing page
            }
        }
    });

});
