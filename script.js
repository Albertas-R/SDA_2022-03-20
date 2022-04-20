"use strict";

// document - pati svetaine
//      querySelectorAll
//      querySelector
//      createElement
// element - ivairus html elementai
//      append
//      innerText
//      innerHTML
//      style.backgroundColor = 'red';
//      id
//      className
//      classList
//        .add
//        .remove
//      setAttribute
//      children
//      remove
// node - visi html informacijos vienetai
//      appendChild
//      insertBefore
//      textContent
//      parentElement
//      previousSibling

const body = document.querySelector("body");
const container = document.createElement("div");
const p = document.createElement("p");
body.append(container);
container.append(p);
p.classList.add("text");
// p.textContent = "2022-02-20 Advanced Features - HTML and CSS";
p.innerHTML =
  "JavaScriptRemoteLT5 <br>2022-02-20 <br><strong>Advanced Features - HTML and CSS</strong>";

// uzduotis
// nenaudojant html, o tik js
//
// 1 sukurti lista kur dinamiskai pridedinesit itemus ir prideti i body
// 2 sukurti inputa su button, kuri paspaudus is inputo butu paimtas tekstas ir idetas i lista, kaip list itemas
// 3 list itemas taip pat tures buttona x, kuri paspaudus itemas bus pasalintas is listo

const input = document.createElement("input");
const btn = document.createElement("button");
const list = document.createElement("ul");

container.append(input);
container.append(btn);
container.append(list);

input.setAttribute("placeholder", "Enter text here");
btn.textContent = "Button";

btn.addEventListener("click", function () {
  if (!input.value) return;
  const listItem = document.createElement("li");
  listItem.textContent = input.value;
  list.append(listItem);
  const btnClose = document.createElement("button");
  listItem.append(btnClose);
  btnClose.textContent = "✖";
  btnClose.classList.add("btn-Close");
  input.value = "";

  btnClose.addEventListener("click", function () {
    listItem.remove();
  });
});

input.addEventListener("input", function (e) {
  if (!e.target.value) {
    // gaunsi kai pirma ivedi ir istrini -> if (!e.target.value)
    console.log("ok");
    btn.classList.add("btn-Empty");
  }
});
