const link = document.querySelector('a');

link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';


const section = document.querySelector('section');


const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
section.appendChild(para);


const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

linkPara.remove();

para.classList.add("highlight");