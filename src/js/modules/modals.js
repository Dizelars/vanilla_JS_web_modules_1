const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector), // Находим все элементы, передаваемые в функцию bindModal()
              windows = document.querySelectorAll('[data-modal]'); // Все модальные окна на странице с атрибутом data-modal

        trigger.forEach(item => { // Перебираем полученный массив с элементами, на которые вешаем событие клика(при нажатии на которые мы хотим модальное окно)
            item.addEventListener('click', (e) => { // Каждому из жлементов массива вешаем клик.
                if(e.target) { // Проверяем, случилось ли событие вообще
                    e.preventDefault(); // Сбрасываем базовое поведение браузера, так как клик может проходить по ссылке, а она по умолчанию перезагружает страницу.
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                }); // Скрываем все модальные окна с data-modal при клике.

                modal.style.display = "block"; // Модальному окну, меняем свойство display на значение block чтобы модальное окно показалось
                document.body.style.overflow = "hidden"; // Скрываем стандартный скролл у браузера, так как он может появиться при изменении свойства элемента.
            });
        });

        close.addEventListener('click', () => { // Вешаем событие клик на тот элемент, которым хотим закрывать модальное окно.
            windows.forEach(item => {
                item.style.display = 'none';
            }); // Скрываем все модальные окна с data-modal при клике на крестрик.
            modal.style.display = "none";  // Скрываем модальное окно, переведя его свойство display в значение none
            document.body.style.overflow = ""; // Обнуляем свойство overflow
        });

        modal.addEventListener('click', (e) => { // Вешаем клик на все модальное окно
            if (e.target === modal && closeClickOverlay) { // Если клик был вне модального окна, то мы его скрываем.
                windows.forEach(item => {
                    item.style.display = 'none';
                }); // Скрываем все модальные окна с data-modal при клике вне окна.
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
};

export default modals;