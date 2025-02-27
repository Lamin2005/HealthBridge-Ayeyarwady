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


function displayComments() {
    const comments = JSON.parse(localStorage.getItem("pendingComments") || "[]");
    const tableBody = document.querySelector("#userTable");
    tableBody.innerHTML = "";
    const userTable = document.getElementById('userTable');

    // Check if there is data to display
    if (comments.length === 0) {
        userTable.innerHTML = `<tr><td colspan="5">No recent orders found</td></tr>`;
        return;
    }

    comments.forEach((comment, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
           
            <td>
                    <img src="${comment.image}">
                    <p>${comment.name}</p>
                    </td>
            <td>${new Date(comment.date).toLocaleString()}</td>
            <td>${comment.text}</td>
            <td>${comment.status}</td>
            <td>
                <button class="approve-btn" onclick="approveComment(${index})">Approve</button>
                <button class="reject-btn" onclick="rejectComment(${index})">Reject</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function approveComment(index) {
    const comments = JSON.parse(localStorage.getItem("pendingComments") || "[]");
    comments[index].status = "approved";
    localStorage.setItem("pendingComments", JSON.stringify(comments));
    displayComments();
    alert("Comment approved successfully!");
}

function rejectComment(index) {
    const comments = JSON.parse(localStorage.getItem("pendingComments") || "[]");
    comments.splice(index, 1); // Remove the rejected comment
    localStorage.setItem("pendingComments", JSON.stringify(comments));
    displayComments();
    alert("Comment rejected and removed successfully!");
}

window.onload = displayComments;


   

