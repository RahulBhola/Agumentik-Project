

  const plusSigns = document.querySelectorAll('.fa-plus');

  // Loop through all plus sign elements and add click event listener
  plusSigns.forEach(plusSign => {
    plusSign.addEventListener('click', () => {
      // Get the corresponding dropdown content
      const dropdownContent = plusSign.nextElementSibling;

      // Toggle the visibility of the dropdown content
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
  });

