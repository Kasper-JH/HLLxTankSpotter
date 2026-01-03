// Main controls
const variationButtons = document.getElementById('variation-buttons');

// Image map data
const imageMap = {
  1: {
    "German Army": "german-army-block",
    "German Winter Camo": "german-winter-block",
    "German Africa Corps": "german-africa-block"
  },
  2: {
    "US Army": "us-army-block",
    "US Winter Camo": "us-winter-block"
  },
  3: {
    "Soviet Armed Forces": "soviet-army-block",
    "Soviet Winter Camo": "soviet-winter-block"
  },
  4: {
    "British Army": "british-army-block",
    "British Eighth Army": "british-eighth-block"
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

  const welcomeCard = document.getElementById('welcome-card');
  if (welcomeCard) {
    welcomeCard.classList.add('hidden');
  }

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

  document.querySelectorAll('.image-block').forEach(block => {
    block.classList.remove('active');
  });

  const blockId = imageMap[category][variation];
  const block = document.getElementById(blockId);

  if (block) {
    setTimeout(() => {
      block.classList.add('active');
    }, 100);
  }
}   

// Map-selector feature
const mapSelect = document.getElementById('map-select');
const mapResult = document.getElementById('map-result');

const mapData = {
  "Carentan": {
    allies: { category: '2', variation: 'US Army' },
    axis:   { category: '1', variation: 'German Army' }
  },
  "Driel": {
    allies: { category: '4', variation: 'British Army' },
    axis:   { category: '1', variation: 'German Army' }
  },
  "El Alamein": {
    allies: { category: '4', variation: 'British Eighth Army' },
    axis:   { category: '1', variation: 'German Africa Corps' }
  },
  "Elsenborn Ridge": {
    allies: { category: '2', variation: 'US Winter Camo' },
    axis:   { category: '1', variation: 'German Winter Camo' }
  },
  "Foy": {
    allies: { category: '2', variation: 'US Winter Camo' },
    axis:   { category: '1', variation: 'German Winter Camo' }
  },
  "Hill 400": {
    allies: { category: '2', variation: 'US Winter Camo' },
    axis:   { category: '1', variation: 'German Winter Camo' }
  },
  "Hürtgen Forest": {
    allies: { category: '2', variation: 'US Winter Camo' },
    axis:   { category: '1', variation: 'German Winter Camo' }
  },
  "Kharkov": {
    allies: { category: '3', variation: 'Soviet Winter Camo' },
    axis:   { category: '1', variation: 'German Winter Camo' }
  },
  "Kursk": {
    allies: { category: '3', variation: 'Soviet Armed Forces' },
    axis:   { category: '1', variation: 'German Army' }
  },
  "Mortain": {
    allies: { category: '2', variation: 'US Army' },
    axis:   { category: '1', variation: 'German Army' }
  },
  "Omaha Beach": {
    allies: { category: '2', variation: 'US Army' },
    axis:   { category: '1', variation: 'German Army' }
  },
  "Purple Heart Lane": {
    allies: { category: '2', variation: 'US Army' },
    axis:   { category: '1', variation: 'German Army' }
  },
  "Remagen": {
    allies: { category: '2', variation: 'US Army' },
    axis:   { category: '1', variation: 'German Army' }
  },
  "Sainte-Marie-du-Mont": {
    allies: { category: '2', variation: 'US Army' },
    axis:   { category: '1', variation: 'German Army' }
  },
  "Sainte-Mère-Église": {
    allies: { category: '2', variation: 'US Army' },
    axis:   { category: '1', variation: 'German Army' }
  },
  "Stalingrad": {
    allies: { category: '3', variation: 'Soviet Armed Forces' },
    axis:   { category: '1', variation: 'German Winter Camo' }
  },
  "Smolensk": {
    allies: { category: '3', variation: 'Soviet Armed Forces' },
    axis:   { category: '1', variation: 'German Army' }
  },
  "Tobruk": {
    allies: { category: '4', variation: 'British Eighth Army' },
    axis:   { category: '1', variation: 'German Africa Corps' }
  },
  "Utah Beach": {
    allies: { category: '2', variation: 'US Army' },
    axis:   { category: '1', variation: 'German Army' }
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
  <p class="map-answer-p">Map is played by:</p>
  <ul>
    <li>
      <a href="#" id="map-answer-design" class="map-answer variation-link" data-cat="${allies.category}" data-var="${allies.variation}">
        ${allies.variation}
      </a>
    </li>
    <li>
      <a href="#" id="map-answer-design" class="map-answer variation-link" data-cat="${axis.category}" data-var="${axis.variation}">
        ${axis.variation}
      </a>
    </li>
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

