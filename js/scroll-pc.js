document.addEventListener('DOMContentLoaded', function() {
  const customizationDiv = document.querySelector('.customization');
  
  if (customizationDiv) {
    customizationDiv.addEventListener('wheel', function(e) {
      
      if (window.innerWidth <= 900) {
        e.preventDefault();
        customizationDiv.scrollLeft += e.deltaY;
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  
  const checkboxes = document.querySelectorAll('.customization input[type="checkbox"]');
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const value = this.value;
      
      
      if (['SPA', 'Recon', 'Light', 'Medium', 'Heavy'].includes(value)) {
        const tankCards = document.querySelectorAll('.tank-card');
        tankCards.forEach(card => {
          const typeElement = card.querySelector('.tank-type');
          if (typeElement && typeElement.textContent.includes(value)) {
            card.style.display = this.checked ? 'none' : 'block';
          }
        });
      }
      
      
      else if (value === 'Details') {
        const detailsElements = document.querySelectorAll('#details');
        const lineElements = document.querySelectorAll('.tank-line');
        detailsElements.forEach(el => {
          el.style.display = this.checked ? 'none' : 'block';
        });
        lineElements.forEach(el => {
          el.style.display = this.checked ? 'none' : 'block';
        });
      }
      else if (value === 'Type') {
        const typeElements = document.querySelectorAll('.tank-type');
        typeElements.forEach(el => {
          if (this.checked) {
            el.style.display = 'none';
          } else {
            el.style.display = '';
          }
        });
      }
      else if (value === 'Callsign') {
        const callsignElements = document.querySelectorAll('.tank-callsign');
        callsignElements.forEach(el => {
          if (this.checked) {
            el.style.display = 'none';
          } else {
            el.style.display = '';
          }
        });
      }
      else if (value === 'Title') {
        const titleElements = document.querySelectorAll('.tank-name');
        titleElements.forEach(el => {
          if (this.checked) {
            el.style.display = 'none';
          } else {
            el.style.display = '';
          }
        });
      }
    });
  });
});