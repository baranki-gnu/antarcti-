let cruisesCatalog = document.querySelector('[data-cruises]');

function toggleNoJsClass() {
  if (cruisesCatalog) {
    let cruiseItems = cruisesCatalog.querySelectorAll('[data-cruise-item]');

    if (cruiseItems) {
      cruiseItems.forEach((item) => {
        item.classList.remove('cruises__item--no-js');
      });
    }
  }
}

export {toggleNoJsClass};
