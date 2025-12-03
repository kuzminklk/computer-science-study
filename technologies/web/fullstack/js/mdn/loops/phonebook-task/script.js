const name = "Mustafa";
const para = document.createElement("p");

const phonebook = [
  { name: "Chris", number: "1549" },
  { name: "Li Kang", number: "9634" },
  { name: "Anne", number: "9065" },
  { name: "Francesca", number: "3001" },
  { name: "Mustafa", number: "6888" },
  { name: "Tina", number: "4312" },
  { name: "Bert", number: "7780" },
  { name: "Jada", number: "2282" },
];

const section = document.querySelector("section");
section.appendChild(para);

// Don't edit the code above here!

// Add your code here

for (let i = 0; i < phonebook.length; i++) {
  if (name === phonebook[i].name) {
    para.textContent = `${phonebook[i].name}'s number is ${phonebook[i].number}`;
    break;
  }
  else {
    para.textContent = `Name not found in the phonebook`;
  }
}