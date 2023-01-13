function trapMenuFocus(item, previousFocusItem = document.activeElement) {
  const focusItems = Array.from(
      item.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])')
  );

  if (focusItems && (focusItems.length > 1)) {
    const initialFocusItem = focusItems[0];
    const lastFocusItem = focusItems[focusItems.length - 1];
    let currentFocus = null;

    initialFocusItem.focus();
    currentFocus = initialFocusItem;

    const toggleFocus = (evt) => {
      evt.preventDefault();

      if (focusItems.includes(evt.target)) {
        currentFocus = evt.target;
      } else {

        if (currentFocus === initialFocusItem) {
          lastFocusItem.focus();
        } else {
          initialFocusItem.focus();
        }

        currentFocus = document.activeElement;
      }
    };

    document.addEventListener('focus', toggleFocus, true);

    return {
      onClose: () => {
        document.removeEventListener('focus', toggleFocus, true);
        previousFocusItem.focus();
      },
    };
  }

  return null;
}

export {trapMenuFocus};
