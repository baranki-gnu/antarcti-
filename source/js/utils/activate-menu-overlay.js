import {trapMenuFocus} from './trap-menu-focus';

let bodyBlock = document.querySelector('[data-page] body');
let headerBlock = document.querySelector('[data-header]');

let logoLink = headerBlock.querySelector('[data-logo-link]');
let toggleWrap = headerBlock.querySelector('[data-toggle-wrap]');
let toggleButton = headerBlock.querySelector('[data-menu-toggle]');
let menuOverlay = document.querySelector('[data-page-overlay]');

let navigationLinks = document.querySelectorAll('[data-navigation] a');

function lockScroll() {
  if (bodyBlock && headerBlock) {
    if (headerBlock.classList.contains('main-header--nav-opened')) {
      bodyBlock.style.overflow = 'hidden';
    }
  }
}

function unlockScroll() {
  if (bodyBlock && headerBlock) {
    if (headerBlock.classList.contains('main-header--nav-closed')) {
      bodyBlock.style.overflow = 'visible';
    }
  }
}

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

function scrollToBlockMobile(link) {
  if (link.dataset.linkTo) {
    let targetName = link.dataset.linkTo;
    let targetNameData = '[data-' + targetName + ']';
    let targetBlock = document.querySelector(targetNameData);
    targetBlock.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  }
}

function openMenu() {
  if (headerBlock) {

    headerBlock.classList.remove('main-header--nav-closed');
    headerBlock.classList.add('main-header--nav-opened');

    if (logoLink && toggleWrap && toggleButton) {
      toggleWrap.classList.remove('toggle--closed');
      toggleWrap.classList.add('toggle--opened');
      logoLink.classList.add('logo--black');
    }

    lockScroll();

    trapMenuFocus(headerBlock);
    document.addEventListener('keydown', onMenuEscKeydown);
    toggleButton.removeEventListener('click', openMenu);
    toggleButton.addEventListener('click', closeMenu);

    navigationLinks.forEach((link) => link.addEventListener('click', () => {
      closeMenu();
      scrollToBlockMobile(link);
    }));
  }
}

function closeMenu() {
  if (headerBlock) {
    headerBlock.classList.remove('main-header--nav-opened');
    headerBlock.classList.add('main-header--nav-closed');
    toggleWrap.classList.remove('toggle--opened');
    toggleWrap.classList.add('toggle--closed');
    logoLink.classList.remove('logo--black');

    unlockScroll();
    trapMenuFocus(headerBlock).onClose();
    document.removeEventListener('keydown', onMenuEscKeydown);
    toggleButton.addEventListener('click', openMenu);
    toggleButton.removeEventListener('click', closeMenu);

    navigationLinks.forEach((link) => link.removeEventListener('click', () => {
      closeMenu();
      scrollToBlockMobile(link);
    }));
  }
}

function onMenuEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMenu();
    toggleButton.removeEventListener('click', closeMenu);
  }
}


function onOpenButtonClick() {
  if (toggleButton && headerBlock.classList.contains('main-header--nav-closed')) {
    toggleButton.addEventListener('click', openMenu);
  }
}

function onCloseButtonClick() {
  if (toggleButton && headerBlock.classList.contains('main-header--nav-opened')) {
    toggleButton.addEventListener('click', closeMenu());
  }
}

function onOutMenuClick() {
  if (menuOverlay) {
    menuOverlay.addEventListener('click', (evt) => {
      if (evt.target === menuOverlay) {
        closeMenu();
      }
    });
  }
}

function removeNoJs() {
  if (headerBlock && logoLink) {
    headerBlock.classList.remove('main-header--nojs');
    logoLink.classList.remove('logo--nojs');
    toggleWrap.classList.remove('toggle--nojs');
  }
}

function callMenuFunctions() {
  removeNoJs();

  onOpenButtonClick();
  onCloseButtonClick();
  onOutMenuClick();
}

export {callMenuFunctions};
