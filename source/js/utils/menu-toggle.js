let headerWrap = document.querySelector('[data-header]');

function toggleMenu(headerContainer) {
  if (headerContainer) {
    let logoLink = headerContainer.querySelector('[data-logo-link]');
    let toggleWrap = headerContainer.querySelector('[data-toggle-wrap]');
    let toggleButton = headerContainer.querySelector('[data-menu-toggle]');

    if (logoLink && toggleWrap && toggleButton) {

      toggleButton.addEventListener('click', (evt) => {
        evt.preventDefault();

        if (headerContainer.classList.contains('main-header--nav-closed')) {
          headerContainer.classList.remove('main-header--nav-closed');
          headerContainer.classList.add('main-header--nav-opened');
          toggleWrap.classList.remove('toggle--closed');
          toggleWrap.classList.add('toggle--opened');
          logoLink.classList.toggle('logo--black');
        } else {
          headerContainer.classList.remove('main-header--nav-opened');
          headerContainer.classList.add('main-header--nav-closed');
          toggleWrap.classList.remove('toggle--opened');
          toggleWrap.classList.add('toggle--closed');
          logoLink.classList.toggle('logo--black');
        }
      });
    }
  }
}

function turnToggleOn() {
  toggleMenu(headerWrap);
}

export {turnToggleOn};
