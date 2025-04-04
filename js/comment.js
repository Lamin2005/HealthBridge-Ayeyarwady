	 // Initialize default values in localStorage
     function initializePendingComments() {
        const defaultComments = [
            {
                name: "လမင်းဟိန်း",
                text: "I am la min hein, and I developed this.",
                status: "approved",
                date: "2024-12-29T15:12:20.745Z",
                image: "images/person_1.jpg"
            },
            {
                name: "နေခြည်လဲ့လွင်",
                text: "Great service and amazing support!",
                status: "approved",
                date: "2024-12-28T10:30:15.123Z",
                image: "images/person_2.jpg"
            },
            {
                name: "ပြည့်စုံထွဋ်",
                text: "Very helpful and responsive team.",
                status: "approved",
                date: "2024-12-27T14:45:00.456Z",
                image: "images/person_3.jpg"
            },
    
            {
                name: "ခန့်ဇော်ထက်",
                text: "Very helpful and responsive team.",
                status: "approved",
                date: "2024-12-27T14:45:00.456Z",
                image: "images/person_4.jpg"
            }
        ];
    
        if (!localStorage.getItem("pendingComments")) {
            localStorage.setItem("pendingComments", JSON.stringify(defaultComments));
        }
    }
    
    // Call the function to initialize default values
    initializePendingComments();
    
    // Toggle form visibility and overlay
    function toggleForm() {
        const commentForm = document.getElementById('commentForm');
        const fadeOverlay = document.getElementById('fadeOverlay');
    
        if (commentForm.classList.contains('show')) {
            commentForm.classList.remove('show');
            fadeOverlay.classList.remove('show');
            setTimeout(() => {
                commentForm.style.display = 'none';
                fadeOverlay.style.visibility = 'hidden';
            }, 300);
        } else {
            fadeOverlay.style.visibility = 'visible';
            fadeOverlay.classList.add('show');
            commentForm.style.display = 'block';
            setTimeout(() => {
                commentForm.classList.add('show');
            }, 10);
        }
    }
    function submitComment() {
        // Check if the user is signed in
        const userData = JSON.parse(sessionStorage.getItem("loggedInUser"));
       
        const users = JSON.parse(localStorage.getItem('users')) || []; // Get users array from local storage
        // Find the user by ID in local storage
    
        if (!userData || typeof userData !== "object" || !userData.name) {
            window.location.href = "signin.html"; // Redirect to sign-in page if not signed in
            return;
        }
    
        // Get the user's comment
        const commentText = document.getElementById("userComment").value;
        if (commentText.trim() === "") {
            alert("Please write a comment.");
            return;
        }
    
        // Retrieve existing comments from localStorage or initialize an empty array
        const pendingComments = JSON.parse(localStorage.getItem("pendingComments") || "[]");
        const { id } = userData; // Extract user ID
        // Add the new comment with a pending status and the current date
        const currentDate = new Date().toISOString();
        // Ensure the image is retrieved from sessionStorage
        const userInfo = users.find(user => user.id === id);
       
        if (userInfo) {
            const { name, imgName } = userInfo;
    
            userImage = imgName || 'images/userdefault.jpg' ; // Default image if no user image is found
        }
    
        pendingComments.push({
            name: userData.name,
            text: commentText,
            status: "pending",
            date: currentDate,
            image: userImage
        });
     
        // Save the updated comments back to localStorage
        localStorage.setItem("pendingComments", JSON.stringify(pendingComments));
    
        // Clear the comment input and show confirmation
        document.getElementById("userComment").value = "";
        alert("Your comment has been submitted for admin approval.");
        window.location.href = "index.html";
    }
    
    function displayApprovedComments() {
        const pendingComments = JSON.parse(localStorage.getItem("pendingComments") || "[]");
        const approvedCommentsDiv = document.getElementById("slider");
        approvedCommentsDiv.innerHTML = "";
    
        pendingComments.forEach(comment => {
            if (comment.status === "approved") {
                const commentDiv = document.createElement("div");
                commentDiv.classList.add('slide');
                commentDiv.innerHTML = `
                    <div class="commenter">
                            <img src="${comment.image}" alt="User Image">
                        <div class="commenter-info">
                            <span>${comment.name}</span>
                            <span><small> ${new Date(comment.date).toLocaleString()}</small></span>
                        </div>
                    </div>
                    <div class="comment">
                        ${comment.text}
                    </div>
                    </div>
                `;
                approvedCommentsDiv.appendChild(commentDiv);
            }
        });
    }
    
    window.onload = displayApprovedComments;
    
    
    // Call the function to display approved comments when the page loads
    document.addEventListener("DOMContentLoaded", () => {
        initializePendingComments();
        displayApprovedComments();
    });
    