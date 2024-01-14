document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevents the default form submission behavior
  
      // Access form values
      const name = form.elements['name'].value;
      const email = form.elements['email'].value;
  
      // Handle form data (e.g., send it to a server)
      console.log('Submitted Form Data:', { name, email });
    });
  
    // You can also handle input change events
    const nameInput = form.elements['name'];
    const emailInput = form.elements['email'];
  
    nameInput.addEventListener('input', function () {
      console.log('Name Input Changed:', nameInput.value);
    });
  
    emailInput.addEventListener('input', function () {
      console.log('Email Input Changed:', emailInput.value);
    });
  });
  