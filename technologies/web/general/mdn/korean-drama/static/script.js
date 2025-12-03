
// document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll("li");

    function toggleDone(event) {
        event.target.classList.toggle("done");
    }

    listItems.forEach((item) => {
        item.addEventListener("click", toggleDone);
    });



    /*
    let docheading = document.querySelector("h1");

     function setHeading() {
        let userheading = prompt("Heading: ");
        localStorage.setItem("userheading", userheading);
        docheading.textContent = userheading;
    }

    if (localStorage.getItem("userheading")) {
        let userheading = localStorage.getItem("userheading");
        docheading.textContent = userheading;
    }
    else {
        setHeading();
    }

    docheading.addEventListener("click", () => {
        setHeading();
    })
    */

    /*
    const myImage = document.querySelector("img");

    myImage.addEventListener("click", () => {
        const mySrc = myImage.getAttribute("src");
        if (mySrc === "static/girl.jpg") {
            myImage.setAttribute("src", "static/girl-2.jpg");
        }
        else {
            myImage.setAttribute("src", "static/girl.jpg");
        }
    })
    */

    /*
    let name = "Даниил";
    const age = 18;

    if (age > 18) {
        console.log("Совешеннолетний")
    } else {
        console.log("Молод")
    }

    for(let i = 0; i < 5; i++) {
        console.log("Повтор №" + i);
    }

    function greet(name) {
        console.log("Привет " + name);
    }

    greet(name);

    document.querySelector("h1").addEventListener("click", () => {alert("Заголовок!")})
    */

    /*
    const header = document.querySelector("h1")
    header.textContent = "Girl!"
    header.style.color = "red";
    */

    /*
    const header = document.querySelector("h1")
    header.addEventListener("click", () => {
        header.style.color = "red";
    })
    */

    /*
    const fruits = ["apple", "banana", "orange"];
    fruits.push("melon");
    fruits.forEach((fruit) => {
        console.log(fruit);
    })

    const upperFruits = fruits.map(fruit => fruit.toUpperCase());
    */

    /*
    const person = {
        name: "Даниил",
        age: 19,
        greet() {
            console.log("Привет " + this.name);
        }
    };

    person.greet()
    */

    /*
    async function getData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data);
    }

    getData();
    */

//})