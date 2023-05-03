const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector); // Берем элементы, которые мы передаем внутрь функции tabs() при ее вызове.

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = "none";
        });

        tab.forEach(item => { // Для каждого элемента tab удаляем класс активности(тот что мы передаем последним аргументом в функцию).
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) { // Работает только если у нас блочные элементы, не флексы. (Для флексов можно поставить проверку, является ли данный блок флексом или блоком)
        content[i].style.display = "block";
        tab[i].classList.add(activeClass); // Добавляем класс активности к контенту, который нужно показать(нам приходит его индекс, именно тот, по которому кликнул пользователь).
    }

    hideTabContent(); // Вызываем функцию скрытия элементов
    showTabContent(); // Вызываем функцию показа элементов

    // Применяем делегирование событий (Вешаем обработчик на весь блок, и проверяем, на какой элемент кликнул пользователь).
    header.addEventListener('click', (e) => { // Вешаем обработчик события на блок со всеми элементами, на которые будем кликать
        const target = e.target;
        if (target && (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
// Делаем несколько проверок:
// 1. Существует ли вообще событие клик на элемент
// 2. Содержит ли элемент класс, передаваемый во 2-ой аргумент без точки класса(для этого и нужны регулярные выражения)
// 3. Или содержит ли родительский элемент, элемента на который кликнули, класс передаваемый во 2-ой аргумент без точки класса(для этого и нужны регулярные выражения)
            tab.forEach((item, i) => {
// Если все проверки прошли, то оставшиеся элементы в переменной tab перебираются, и если элемент по которому прошел клик, равеен элементу или его родителю в массиве tab, то:
                if (target === item || target.parentNode === item) {
                    hideTabContent();
                    showTabContent(i);
                    // 1) Скрываем каждый полученный элемент после проверки.
                    // 2) Показываем именно тот контент, который соответствует индексу элемента в массиве tab.
                }
            });
        }
    });
};

export default tabs;