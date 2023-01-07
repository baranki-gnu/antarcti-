if (document.querySelector('#YMapsID')) {
  window.ymaps.ready(function () {

    let myMap = new window.ymaps.Map('YMapsID', {
      center: [59.937809, 30.322777],
      zoom: 15,
    }, {
      searchControlProvider: 'yandex#search',
    });

    let myPlacemark = new window.ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'г. Санкт Петербург, ул. Большая Конюшенная, 19/8',
      balloonContent: 'Наш офис расположен здесь',
    }, {
      iconLayout: 'default#image',
      iconImageHref: './img/svg/mark.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [-15, 58],
    });

    myMap.geoObjects
        .add(myPlacemark);
  });
}
