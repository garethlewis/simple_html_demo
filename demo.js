((document) => {
    // Select the button we want using a css selector
    const button = document.querySelector('.button');

    // Select the textarea
    const textbox = document.querySelector('.questionbox');

    // If you can't find all the components required for this script, exit.
    if (button === null || button === undefined) return;
    if (textbox === null || textbox === undefined) return;

    button.addEventListener('click', () => {
        button.classList.add('green-background');
        setTimeout(() => {
            showTextBox();
            button.classList.add('hidden');
        }, 5000);
    }, {once: true}) // The once here is a special flag that means the event listener will only ever fire once.  After the click
    // if is effectively removed.

    function toggle() {
        textbox.classList.toggle('hidden');
    }

    function showTextBox() {
        textbox.classList.remove('hidden');
    }

})(document);