  // Select form and input elements
  const form = document.querySelector('.form');
  const ageInput = document.getElementById('age');
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  
  // Listen for form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from reloading the page
  
    // Get user inputs
    const age = parseInt(ageInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert cm to meters
    const weight = parseFloat(weightInput.value);
  
    // Validate inputs
    if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 0 || height <= 0 || weight <= 0) {
      alert('Please enter valid inputs for all fields.');
      return;
    }
  
    // Calculate BMI
    const bmi = weight / (height * height);
  
    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }
  
    // Display result
    alert(`Your BMI is ${bmi.toFixed(2)}, which falls under the category: ${category}`);
  });
  