// 1 - отримай body елемент і виведи його в консоль;
const body = document.querySelector("body")
console.log(body);
// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.querySelector("#title")
console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector(".list")
console.log(list);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const topik = document.querySelectorAll("[data-topic]")
console.log(topik);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const topik2 = document.querySelector("[data-topic]")
console.log(topik2);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const topic3 = document.querySelectorAll("[data-topic]")
const topic4 = topic3[topic3.length - 1]
console.log(topic4)
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const sysid = document.querySelector("h1")
const sysid2 = sysid.nextElementSibling;
console.log(sysid2);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const elem = document.querySelectorAll("h3")
elem.forEach(elem2 => {
    console.log(elem2);
});

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
const act = document.querySelectorAll("h3")
act.forEach(element => {
    element.classList.add("active")
});
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const naviga = document.querySelector('[data-topic="navigation"]')
console.log(naviga);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
naviga.style.backgroundColor = "Yellow"
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const nav = naviga.querySelector("p")
nav.textContent = "Я змінив тут текст!"
// 13 - створи const currentTopic = "manipulation";
// після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation"
const man = document.querySelector(`[data-topic="${currentTopic}"]`)
console.log(man);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
man.style.backgroundColor = "blue"
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const zah = document.querySelector(".completed")
console.log(zah);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const zah2 = zah.closest("li")
zah2.remove()

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст:
//  "Об'єктна модель документа (Document Object Model)"
const kek = document.querySelector("h1")
const kek2 = document.createElement("p")
kek2.textContent = "Об'єктна модель документа (Document Object Model)";
kek.after(kek2)
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) -
// "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами
//  і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3
// та P і готову LI закинути у кінець списку
const lel = document.querySelector("ul")
const lel2 = document.createElement("li")
const lel3 = document.createElement("h3")
lel3.textContent = "Властивість innerHTML"
lel2.appendChild(lel3)
const lel4 = document.createElement("p")
lel4.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу"
lel2.appendChild(lel4)
lel.appendChild(lel2)
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const tem = `<li>
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
    </li>`
lel.insertAdjacentHTML("afterend", tem)
// 20 - очисти список
lel.innerHTML = "";









// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
let html = ``;
const num = document.querySelector(".numberContainer")
for (let i = 0; i < 100; i++) {
    const el = randomNumber();
    if (el % 2 === 0) {
    html += `<li class="number even">${el}</li>`
    } else {
    html += `<li class="number odd">${el}</li>`
}
}
num.insertAdjacentHTML("beforeend", html);




// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const inp = document.querySelector(".js-username-input")
inp.addEventListener("input", inputsHands)
function inputsHands() {
    if (inp.value.length > 6) {
        inp.classList.add("success")
        inp.classList.remove("error")
    } else {
        inp.classList.add("error")
        inp.classList.remove("success")
    }
}
// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
inp.addEventListener("focus", inpHandler)
function inpHandler(e) {
    if (e.target.value === "") {
        e.target.style.outline = "3px solid red";
    } else {
         e.target.style.outline = "3px solid green";
    }
}


// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
inp.addEventListener('blur', temsHandler)
function temsHandler(e) {
    if (e.target.value === "") {
        e.target.style.outline = '3px solid red'
    } else {
        e.target.style.outline = '3px solid lime'
    }
}

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
const form = document.querySelector(".js-contact-form")
const check = document.querySelector(".js-policy-checkbox")
const sp = document.querySelector(".js-username-output")
form.addEventListener('submit', subHandler)
function subHandler(e) {
    e.preventDefault()
   
    const userFaid = inp.value.trim()
    const checkboxsis = check.checked
if (userFaid !== "" && checkboxsis) {
    const userName = {
        name: userFaid
    };
    sp.textContent = userName.name
console.log(userName.name);
} else {
    alert("ops...")
        sp.textContent = "Anonymous"
    }
    inp.value = "";
    check.checked = false;
    }
    inp.addEventListener("input", iHandler)
   function iHandler(e){
if (e.target.value.trim() === "") {
    sp.textContent = "Anonymous"
} else {
    sp.textContent = e.target.value.trim()
}
    }



 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
const box = document.querySelector(".box")
const big = document.querySelector(".js-increase")
const small = document.querySelector(".js-decrease")
small.addEventListener('click', smallHandlir)
function smallHandlir() {
    const currentWidth = parseInt(getComputedStyle(box).width)
    const currentheight = parseInt(getComputedStyle(box).height)
    box.style.height = `${currentheight - 20}px`
    box.style.width = `${currentWidth - 20}px`
}
big.addEventListener('click', bigHandlir)
function bigHandlir() {
    const currentWidth = parseInt(getComputedStyle(box).width);
    const currentheight = parseInt(getComputedStyle(box).height)
    box.style.height = `${currentheight + 20}px`
    box.style.width = `${currentWidth + 20}px`
    
}