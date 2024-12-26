console.log("I am linked");

// TOGGLE MENU
const toggleMenu = document.querySelector('.toggle-menu');
const toggleMenuButton = document.querySelector('.site-menu-button');

toggleMenuButton.onclick = function() {
  
  if (toggleMenu.getAttribute('data-menustate') === 'closed') {
    
    // if closesd, open
    toggleMenu.setAttribute('data-menustate','open');
  
  } else {
    
    // else, close it
    toggleMenu.setAttribute('data-menustate','closed');
    
  } 
  
};

// CLOSE THE TOGGLE MENU WHENEVER A USESR CLICKS ON A MENU LINK
const toggleMenuLinks = document.querySelectorAll('.toggle-menu a');
toggleMenuLinks.forEach((el) => {
  el.onclick = () => {
    toggleMenu.setAttribute('data-menustate','closed');
  }
});