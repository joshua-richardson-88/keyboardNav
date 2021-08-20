const menuButtons = document.querySelectorAll('.menu-button');
const hotkeys = document.querySelectorAll('.hotkey');
console.log(hotkeys);

window.addEventListener('click', (event) => {
  [...menuButtons].forEach((button) => {
    (event.target != button) ? button.classList.remove('active') : button.classList.add('active');
  });
});
window.addEventListener('keydown', (event) => {
  if (event.keyCode == 27) {
    console.log('escape key pressed');
    [...menuButtons].forEach((button) => { button.classList.remove('active'); });
  } else if (event.altKey) {
    event.preventDefault();
    console.log('made it to altkey');
    [...hotkeys].forEach((hotkey) => {
      console.log(hotkey.lastChild.textContent.toLowerCase());
      if (hotkey.lastChild.textContent.toLowerCase() == event.key) {
        let parent = hotkey.parentElement;
        [...menuButtons].forEach((button) => {
          (button == parent) ? button.classList.add('active') : button.classList.remove('active');
        });
      }
    });
  }
});


/*
for (let i = 0; i < menuButtons.length; i++) {
  //when you click a menu button, show its menu, and hide any other active menu.
  menuButtons[i].addEventListener('click', () => {
    menuButtons[i].classList.toggle('active');
    for (let j = 0; j < menuButtons.length; j++) {
      if (j != i) {
        menuButtons[j].classList.remove('active');
      }
    }
  });
}
//close menu if you click away from it
window.addEventListener('click', (event) => {
  for (let i = 0; i < menuButtons.length; i++) {
    if (event.target != menuButtons[i]) {
      menuButtons[i].classList.remove('active');
    }
  }
});
//close menu if press escape
window.addEventListener('keypress', (event) => {
  menuButtons.forEach()
});
*/