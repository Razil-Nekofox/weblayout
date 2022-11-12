document.addEventListener('DOMContentLoaded', function() {
  // Ваш скрипт
  // MAP

// Функция ymaps.ready() будет вызвана, когда
      // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
      ymaps.ready(init);
      function init(){
          // Создание карты.
          var myMap = new ymaps.Map("map", {
              // Координаты центра карты.
              // Порядок по умолчанию: «широта, долгота».
              // Чтобы не определять координаты центра карты вручную,
              // воспользуйтесь инструментом Определение координат.
              center:[48.87240127046783,2.354146412613347],
              // Уровень масштабирования. Допустимые значения:
              // от 0 (весь мир) до 19.
              zoom: 7
          });
         // Создаем геообъект с типом геометрии "Точка".
        // const myGeoObject = new ymaps.GeoObject({
        //   // Описание геометрии.
        //   geometry: {
        //       type: "Point",
        //       coordinates: [48.87240127046783,2.354146412613347]
        //   }});
          const myPlacemark = new ymaps.Placemark ([48.87240127046783,2.354146412613347],{},
            {
              iconLayout: 'default#image',
              iconImageHref: 'img/Subtract.svg',
              iconImageSize: [30, 42],
            });
          // myMap.geoObjects.add(myGeoObject);
          myMap.geoObjects.add(myPlacemark);
        }

        // <!-- //ВАЛИДАЦИЯ ФОРМЫ -->
        const selector = document.querySelector("input[type='tel']");
        const im = new Inputmask("+7 (999)-999-99-99");
        im.mask(selector);

        const validate = new JustValidate('form', {
          rules: {
            name: {
              required: true,
              minLenght:2,
              maxLenght:10},
              tel:{
                required: true,
                function: (name, value) =>{
                  const phone = selector.Inputmask.unmaskedvalue()
                  return Number(phone) && phone.length === 10
                }
              },
              mail: {
                required: true,
                email: true
              },
            },
            messages: {
              name: 'Вы не ввели имя',
              mail: 'Вы не ввели e-mail',
              tel:  'Вы не ввели телефон'
          },
        });

const choices = new Choices('#select_mat', {
  searchEnabled: false,
         shouldSort: false,
         shouldSortItems: false,
});



      })
