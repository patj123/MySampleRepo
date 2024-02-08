//getting element by the id

const section = document.getElementById("container");

//getting element by the query selector

const selector = document.querySelector("#container");

const second = document.getElementsByClassName("second")

const third = document.querySelector("ol .third")

let greeting = document.getElementById("container")

greeting.innerText = "Hello"

let footer = document.querySelector(".footer")

footer.className += "main"

let newList = document.createElement("li")

newList.innerText = "four"

let newUL = document.querySelector("ul");

newUL.append(newList);

let ol = document.querySelectorAll("ol");

ol.style.color = "green"

footer.remove();