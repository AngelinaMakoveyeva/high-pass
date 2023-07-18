// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  const myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.7637,37.6219],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,
    controls: [],
  });

  const myPlacemark = new ymaps.Placemark([55.769732, 37.638934], {}, {
      iconLayout: "default#image",
      iconImageHref: "img/ellipse.svg",
      iconImageSize: [12, 12],
      iconImageOffset: [-10, -10],
    }
  );

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);

  contactsMap.controls.remove('geolocationControl'); // удаляем геолокацию
  contactsMap.controls.remove('searchControl'); // удаляем поиск
  contactsMap.controls.remove('trafficControl'); // удаляем контроль трафика
  contactsMap.controls.remove('typeSelector'); // удаляем тип
  contactsMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  contactsMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  contactsMap.controls.remove('rulerControl'); // удаляем контрол правил
  contactsMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}
