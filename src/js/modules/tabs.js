const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = "none";
        });
    }

    function showTabContent(i) { // Работает только если у нас блочные элементы, не флексы. (Для флексов можно поставить проверку, является ли данный блок флексом или блоком)
        content[i].style.display = "block"
    }
};

export default tabs;