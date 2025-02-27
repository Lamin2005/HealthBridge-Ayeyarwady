document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('[data-id]');
    const contents = document.querySelectorAll('[data-content]');
    let id = 0;

    // Set the first tab as active initially
    tabs[id].classList.add('activee');

    // Show only the first content initially
    contents.forEach(function (box) {
        if (box.getAttribute('data-content') == id) {
            box.classList.add('show1');
            box.classList.remove('hide1');
        } else {
            box.classList.add('hide1');
        }
    });

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('activee'));

            // Add active class to the clicked tab
            tab.classList.add('activee');

            // Update id to current tab
            id = tab.getAttribute('data-id');

            // Hide all contents and show the selected one
            contents.forEach(function (box) {
                box.classList.add('hide1');
                box.classList.remove('show1');
                if (box.getAttribute('data-content') == id) {
                    box.classList.remove('hide1');
                    box.classList.add('show1');
                }
            });
        });
    });
});
