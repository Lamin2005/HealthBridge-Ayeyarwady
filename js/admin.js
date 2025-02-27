const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
});


	const userArray = JSON.parse(localStorage.getItem('users')) || [];

	const userCountElement = document.getElementById('userCount');
	userCountElement.textContent = userArray.length;


    const userpayment = JSON.parse(localStorage.getItem('Paymentusers')) || [];

	const userCountpayment = document.getElementById('userCountPayment');
	userCountpayment.textContent = userpayment.length;

    document.addEventListener('DOMContentLoaded', () => {
        // Fetch user data from localStorage
        const updatedUsers = JSON.parse(localStorage.getItem('Paymentusers')) || [];

        // Reference the table body
        const userTable = document.getElementById('userTable');

        // Check if there is data to display
        if (updatedUsers.length === 0) {
            userTable.innerHTML = `<tr><td colspan="5">No recent orders found</td></tr>`;
            return;
        }

        // Populate the table
        const populateTable = () => {
            userTable.innerHTML = ''; // Clear the table
            if (updatedUsers.length === 0) {
                userTable.innerHTML = `<tr><td colspan="5">No recent orders found</td></tr>`;
                return;
            }
            updatedUsers.forEach((user, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                   
                    <td>
                    <img src="${user.imgName}">
                    <p>${user.name}</p>
                    </td>
                    <td>${user.paymentDate}</td> <!-- Placeholder for Date Order -->
                    <td>${user.account || 'N/A'}</td> <!-- Placeholder for Type -->
                    <td>${user.money}</td>
                    <td>${user.status}</td>
                    <td>
                        <button class="approve-btn" data-index="${index}">Approve</button>
                        <button class="reject-btn" data-index="${index}">Reject</button>
                    </td>
                `;
                userTable.appendChild(row);
            });
        };

        populateTable(); // Initial population of the table

        // Event delegation for action buttons
        userTable.addEventListener('click', (e) => {
            const button = e.target;
            if (button.classList.contains('approve-btn')) {
                handleApprove(button.dataset.index);
            } else if (button.classList.contains('reject-btn')) {
                handleReject(button.dataset.index);
            }
        });

        // Approve function
        function handleApprove(index) {
            const users = JSON.parse(localStorage.getItem('Paymentusers')) || [];
            users[index].status = 'approved'; // Update status to approved
            localStorage.setItem('Paymentusers', JSON.stringify(users));
            alert(`User ${users[index].name} has been approved.`);
            window.location.reload();
            populateTable();
        }

        // Reject function
        function handleReject(index) {
            let users = JSON.parse(localStorage.getItem('Paymentusers')) || [];
            const rejectedUser = users.splice(index, 1); // Remove the user from the array
            localStorage.setItem('Paymentusers', JSON.stringify(users));
            alert(`User ${rejectedUser[0].name} has been rejected and removed.`);
            window.location.reload();
            populateTable();
        }
      
    });



    
    // Initialize data in localStorage if not already present
    if (!localStorage.getItem("Paymentusers")) {
        localStorage.setItem("Paymentusers", JSON.stringify(sampleData));
      }
      
      // Function to calculate total approved amount and display summation details
      function calculateAndDisplayTotal() {
        const Paymentusers = JSON.parse(localStorage.getItem("Paymentusers"));
      
        // Extract approved payments
        const approvedPayments = Paymentusers.filter(user => user.status === "approved");
      
        // Calculate the total and prepare the summation string
        let total = 0;
        const sumDetails = approvedPayments.map(user => {
          const amount = parseFloat(user.money); // Convert string to number
          total += amount; // Add the amount to the total
          return amount;   // Return the amount for the summation string
        });
      
        // Create the summation string (e.g., "25000 + 5000 = 30000")
        const summationString = total;
      
        // Display the summation in the HTML
        document.getElementById("totalAmount").textContent = summationString;
      }
      
      // Function to render the table
      function renderTable() {
        const paymentTable = document.getElementById("paymentTable");
        const Paymentusers = JSON.parse(localStorage.getItem("Paymentusers"));
    
        // Calculate and display the total
        calculateAndDisplayTotal();
      }
      
      // Function to change status and update localStorage
      function changeStatus(index, newStatus) {
        const Paymentusers = JSON.parse(localStorage.getItem("Paymentusers"));
        Paymentusers[index].status = newStatus;
        localStorage.setItem("Paymentusers", JSON.stringify(Paymentusers));
        renderTable();
      }
      
      // Initial render
      renderTable();


      


      

   

