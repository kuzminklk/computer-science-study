const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    span.textContent = input.value;
    input.value = '';
    button.textContent = 'Delete';

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);

    button.addEventListener('click', (event) => {
        event.preventDefault();
        li.remove();
        input.focus();
    })

})

