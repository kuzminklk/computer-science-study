
/* let items = ['bread', 'coffee', 'milk'];

for (let item of items) {
    const para = document.createElement("p");
    para.textContent = item;
    document.body.appendChild(para); 
} */

let items = ['bread', 'coffee', 'milk'];

let myList = items.join(', ');

const para = document.createElement("p");
para.textContent = myList;
document.body.appendChild(para); 