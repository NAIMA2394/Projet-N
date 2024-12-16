function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Gather form data
    const service = document.getElementById('service').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;

    // Display confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = `<h3>Appointment Confirmed!</h3>
                                      <p>Service: ${service}</p>
                                      <p>Doctor: ${doctor}</p>
                                      <p>Date: ${date}</p>
                                      <p>Time: ${time}</p>
                                      <p>Name: ${name}</p>
                                      <p>Contact: ${contact}</p>`;
    
    // Clear the form
    document.getElementById('appointmentForm').reset();
}

