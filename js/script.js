
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



window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

const refreshButton = document.querySelector('.logo-refresh');

function refreshPage() {
  location.reload();
}

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  
  const variationBtn = document.querySelector('#variation');
  const customizationBtn = document.querySelector('#customization');
  
  if (variationBtn) {
    variationBtn.disabled = true;
    variationBtn.style.opacity = '0.5';
    variationBtn.style.cursor = 'help';
    variationBtn.title = 'Select a Faction to unlock this feature';
  }
  
  if (customizationBtn) {
    customizationBtn.disabled = true;
    customizationBtn.style.opacity = '0.5';
    customizationBtn.style.cursor = 'help';
    customizationBtn.title = 'Select a Faction to unlock this feature';
  }
});

window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);

function handleRoute() {
  const hash = window. location.hash. slice(2); // Remove "#/"
  
  const routes = {
    'german': 1,
    'united-states':  2,
    'soviet-union': 3,
    'british': 4
  };
  
  if (routes[hash]) {
    updateVariations(routes[hash]);
  }
}