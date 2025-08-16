document.addEventListener('DOMContentLoaded', () => {
  
  const bookButtons = document.querySelectorAll('.btn-primary');

  bookButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      
      const dateSelect = document.getElementById(`date${index + 1}`);
      const timeSelect = document.getElementById(`time${index + 1}`);

      const selectedDate = dateSelect.value;
      const selectedTime = timeSelect.value;

     
      if (!selectedDate && !selectedTime) {
        alert('Please choose a date and a time!');
      } else if (!selectedDate) {
        alert('Please choose a date!');
      } else if (!selectedTime) {
        alert('Please choose a time!');
      } else {
        alert(`Success! Your appointment is booked for ${selectedDate} at ${selectedTime}.`);
      }
    });
  });
});
