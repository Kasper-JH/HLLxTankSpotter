
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
let fromMapBlock = false; 

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
    a.setAttribute('aria-disabled', 'true');
    a.tabIndex = -1;
    a.classList.add('variation-disabled');
  } else {
    a.addEventListener('click', (e) => {
      e.preventDefault();               
      showImage(category, variation);
      currentVariation = variation;

      
      document.querySelectorAll('#variation-buttons .variation-link')
        .forEach(b => b.classList.remove('active'));

      a.classList.add('active');
    });
  }

  li.appendChild(a);
  variationButtons.appendChild(li);

  
  if (!fromMapBlock && index === 0 && variations[variation]) {
    a.click();
  }
});

  enableSubMenus();

 if (fromMapBlock==false) {
  toggleSubMenu(submenu2);
 }

  fromMapBlock = false;
}


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
      fromMapBlock = true; 

      updateVariations(link.dataset.cat);

      document.querySelectorAll('#variation-buttons .variation-link').forEach(vb => {
  if (vb.dataset.var === link.dataset.var) {
    vb.click();
        }
      });
    });
  });
});

function enableSubMenus() {
  window.factionSelected = true; 
  
  const variationBtn = document.querySelector('#variation');
  const customizationBtn = document.querySelector('#customization');
  
  if (variationBtn) {
    variationBtn.classList.remove('disabled-menu');
    variationBtn.style.opacity = '1';
    variationBtn.style.cursor = 'pointer';
    variationBtn.style.pointerEvents = 'auto';
    variationBtn.removeAttribute('title');
  }
  
  if (customizationBtn) {
    customizationBtn.classList.remove('disabled-menu');
    customizationBtn.style.opacity = '1';
    customizationBtn.style.cursor = 'pointer';
    customizationBtn.style.pointerEvents = 'auto';
    customizationBtn.removeAttribute('title');
  }
}