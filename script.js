// Check if animation preference is saved in localStorage and apply it
document.addEventListener('DOMContentLoaded', () => {
    const enableAnimationCheckbox = document.getElementById('enableAnimation');
    const animateButton = document.getElementById('animateButton');
  
    // Retrieve user preference for animation from localStorage
    const isAnimationEnabled = localStorage.getItem('enableAnimation') === 'true';
    
    // Apply animation based on saved preference
    if (isAnimationEnabled) {
      animateButton.classList.add('animate');
      enableAnimationCheckbox.checked = true;
    }
  
    // Event listener for the checkbox to toggle animation on and off
    enableAnimationCheckbox.addEventListener('change', (event) => {
      const isChecked = event.target.checked;
      
      if (isChecked) {
        animateButton.classList.add('animate');
      } else {
        animateButton.classList.remove('animate');
      }
  
      // Save the user's preference in localStorage
      localStorage.setItem('enableAnimation', isChecked);
    });
  });
  