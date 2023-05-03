const forms = () => {
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input');

    const messages = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
        failure: 'Что-то пошло не так...'
    }

    form.forEach((item) => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
        })
    });
}

export default forms;