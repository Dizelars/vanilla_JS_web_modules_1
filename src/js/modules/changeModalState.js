import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => { // Получаем все данные которые хотим собрать от пользователя
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width'); // Валидация ширины и высоты, для ввода только чисел. (Отдельный валидирующий модуль)
    checkNumInputs('#height');

    function bindActionsToElems (event, elem, prop) { // Универсальная функция, куда мы передаем тип события, элемент по которому происходит событие, и записываем значение в определенное свойство.
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {             // В зависимости от того, на какой элемент кликнул пользователь, мы записываем то или иное значение.
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }

    bindActionsToElems('click', windowForm, 'form');
    bindActionsToElems('input', windowWidth, 'width');
    bindActionsToElems('input', windowHeight, 'height');
    bindActionsToElems('change', windowType, 'type');
    bindActionsToElems('change', windowProfile, 'profile');
};

export default changeModalState;