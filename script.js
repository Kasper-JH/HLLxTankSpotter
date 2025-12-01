// Main controls
const variationButtons = document.getElementById('variation-buttons');
const armyImage = document.getElementById('army-image');
const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')
const submenu2 = document.getElementById('variation')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function toggleSubMenu(submenu2){
let button = submenu2;

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')
  
  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}

// Image map data
const imageMap = {
  1: {
    "[German] Army": "german.jpg",
    "[German] Winter Camo": "german_winter.jpg",
    "[German] Africa Corps": "german_africa.jpg"
  },
  2: {
    "[US] Army": "us.jpg",
    "[US] Winter Camo": "us_winter.jpg"
  },
  3: {
    "[Soviet] Armed Forces": "soviet.jpg",
    "[Soviet] Winter Camo": "soviet_winter.jpg"
  },
  4: {
    "[British] Army": "british.jpg",
    "[British] Eighth Army": "british_eighth.jpg"
  }
};

let currentCategory = '1';
let currentVariation = '';
let fromMapBlock = false; // Flag to track if the faction is selected from the map block

// Update variations
function updateVariations(value){
  let category = value;
  currentCategory = category;
  const variations = imageMap[category];

 variationButtons.innerHTML = "";

Object.keys(variations).forEach((variation, index) => {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.href = "#";
  a.textContent = variation;
  a.classList.add('variation-link');
  a.dataset.var = variation;

  if (!variations[variation]) {
    // anchors can't be disabled, so use aria + tabindex for accessibility
    a.setAttribute('aria-disabled', 'true');
    a.tabIndex = -1;
    a.classList.add('variation-disabled');
  } else {
    a.addEventListener('click', (e) => {
      e.preventDefault();               // stop the '#' jump
      showImage(category, variation);
      currentVariation = variation;

      // remove active class from all variation links (adjust selector if needed)
      document.querySelectorAll('#variation-buttons .variation-link')
        .forEach(b => b.classList.remove('active'));

      a.classList.add('active');
    });
  }

  li.appendChild(a);
  variationButtons.appendChild(li);

  // Auto-select first variation if valid and not from map
  if (!fromMapBlock && index === 0 && variations[variation]) {
    // trigger the anchor click (same handler will run)
    a.click();
  }
});


  fromMapBlock = false;
  toggleSubMenu(submenu2);
}

// Show the image based on the selected variation
function showImage(category, variation) {
  armyImage.classList.remove('visible'); // Hide image initially
  armyImage.src = imageMap[category][variation];  // Set the new image source
  armyImage.alt = variation;

  // Trigger image fade-in after it's loaded
  setTimeout(() => {
    armyImage.classList.add('visible');
  }, 100); // Small delay for smoother transition
}

// Map-selector feature
const mapSelect = document.getElementById('map-select');
const mapResult = document.getElementById('map-result');

const mapData = {
  "Carentan": {
    allies: { category: '2', variation: '[US] Army' },
    axis:   { category: '1', variation: '[German] Army' }
  },
  "Driel": {
    allies: { category: '4', variation: '[British] Army' },
    axis:   { category: '1', variation: '[German] Army' }
  },
  "El Alamein": {
    allies: { category: '4', variation: '[British] Eighth Army' },
    axis:   { category: '1', variation: '[German] Africa Corps' }
  },
  "Elsenborn Ridge": {
    allies: { category: '2', variation: '[US] Winter Camo' },
    axis:   { category: '1', variation: '[German] Winter Camo' }
  },
  "Foy": {
    allies: { category: '2', variation: '[US] Winter Camo' },
    axis:   { category: '1', variation: '[German] Winter Camo' }
  },
  "Hill 400": {
    allies: { category: '2', variation: '[US] Winter Camo' },
    axis:   { category: '1', variation: '[German] Winter Camo' }
  },
  "Hürtgen Forest": {
    allies: { category: '2', variation: '[US] Winter Camo' },
    axis:   { category: '1', variation: '[German] Winter Camo' }
  },
  "Kharkov": {
    allies: { category: '3', variation: '[Soviet] Winter Camo' },
    axis:   { category: '1', variation: '[German] Winter Camo' }
  },
  "Kursk": {
    allies: { category: '3', variation: '[Soviet] Armed Forces' },
    axis:   { category: '1', variation: '[German] Army' }
  },
  "Mortain": {
    allies: { category: '2', variation: '[US] Army' },
    axis:   { category: '1', variation: '[German] Army' }
  },
  "Omaha Beach": {
    allies: { category: '2', variation: '[US] Army' },
    axis:   { category: '1', variation: '[German] Army' }
  },
  "Purple Heart Lane": {
    allies: { category: '2', variation: '[US] Army' },
    axis:   { category: '1', variation: '[German] Army' }
  },
  "Remagen": {
    allies: { category: '2', variation: '[US] Army' },
    axis:   { category: '1', variation: '[German] Army' }
  },
  "Sainte-Marie-du-Mont": {
    allies: { category: '2', variation: '[US] Army' },
    axis:   { category: '1', variation: '[German] Army' }
  },
  "Sainte-Mère-Église": {
    allies: { category: '2', variation: '[US] Army' },
    axis:   { category: '1', variation: '[German] Army' }
  },
  "Stalingrad": {
    allies: { category: '3', variation: '[Soviet] Armed Forces' },
    axis:   { category: '1', variation: '[German] Winter Camo' }
  },
  "Tobruk": {
    allies: { category: '4', variation: '[British] Eighth Army' },
    axis:   { category: '1', variation: '[German] Africa Corps' }
  },
  "Utah Beach": {
    allies: { category: '2', variation: '[US] Army' },
    axis:   { category: '1', variation: '[German] Army' }
  }
};

mapSelect.addEventListener('change', () => {
  const map = mapSelect.value;
  if (!mapData[map]) {
    mapResult.innerHTML = '';
    return;
  }
  const { allies, axis } = mapData[map];

  mapResult.innerHTML = `
  <p>This map is played by:</p>
  <ul class="map-list">
    <li class="map-line">
      <a href="#" class="map-answer" data-cat="${allies.category}" data-var="${allies.variation}">
        ${allies.variation}
      </a>
    </li>
     <hr />
    <li class="map-line">
      <a href="#" class="map-answer" data-cat="${axis.category}" data-var="${axis.variation}">
        ${axis.variation}
      </a>
    </li>
     <hr />
  </ul>
`;

document.querySelectorAll('.map-answer').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
      fromMapBlock = true; // Set flag to indicate the selection is from the map block

      updateVariations(link.dataset.cat);

      document.querySelectorAll('#variation-buttons .variation-link').forEach(vb => {
  if (vb.dataset.var === link.dataset.var) {
    vb.click();
        }
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  updateVariations(1);
});

// Add "loaded" class to body when page has finished loading
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});








