const editBtn = document.querySelector('.edit-btn');
const saveBtn = document.querySelector('.save-btn');
const detailTexts = document.querySelectorAll('.detail-text');
const editInputs = document.querySelectorAll('.edit-input');

editBtn.addEventListener('click', () => {
  editBtn.style.display = 'none';
  saveBtn.style.display = 'block';

  detailTexts.forEach((text) => (text.style.display = 'none'));
  editInputs.forEach((input) => (input.style.display = 'block'));
});
saveBtn.addEventListener('click', () => {
  editBtn.style.display = 'block';
  saveBtn.style.display = 'none';

  editInputs.forEach((input, index) => {
    if (input.tagName === 'SELECT') {
      // Update the text for the dropdown selection
      detailTexts[index].textContent = input.options[input.selectedIndex].text;
    } else {
      // Update the text for other inputs
      detailTexts[index].textContent = input.value;
    }
    input.style.display = 'none';
  });

  detailTexts.forEach((text) => (text.style.display = 'block'));
});



document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  const bmiData = JSON.parse(localStorage.getItem("bmi")) || [];

  if (loggedInUser && bmiData.length > 0) {
      const userBmiRecords = bmiData.filter(record => record.id === loggedInUser.id);
      if (userBmiRecords.length > 1) {
          const firstEntry = userBmiRecords[0];
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

