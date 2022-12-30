let navBar = document.querySelector('[data-navigation]');

function scrollToBlock(link, targetBlock) {
  if (link && targetBlock) {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      targetBlock.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    });
  }
}

function navigationScroll(navMenu) {
  if (navMenu) {
    let strengthsLink = navMenu.querySelector('[data-strengths-link]');
    let cruisesLink = navMenu.querySelector('[data-cruises-link]');
    let contactsLink = navMenu.querySelector('[data-contacts-link]');

    let strengthsBlock = document.querySelector('[data-strengths]');
    let cruisesBlock = document.querySelector('[data-cruises]');
    let contactsBlock = document.querySelector('[data-contacts]');

    scrollToBlock(strengthsLink, strengthsBlock);
    scrollToBlock(cruisesLink, cruisesBlock);
    scrollToBlock(contactsLink, contactsBlock);
  }
}

function turnNavScrollOn() {
  navigationScroll(navBar);
}

export {turnNavScrollOn};
