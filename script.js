//storing the #container in a variable container
const container = document.querySelector('#container');

//create a element div and store in the variable content
const content = document.createElement('div');
//adding a class to the div inside variable content
content.classList.add('content');
//adding text in the div.content
content.textContent = "This is the glorius text-content";

//insert in the container as a child
container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';

container.appendChild(paragraph);

const title3 = document.createElement('h3');
title3.textContent = "I'm a blue h3";
title3.style.color = "blue";

container.appendChild(title3);

const newDiv = document.createElement('div');
newDiv.setAttribute('style', 'border: 1px solid black; background-color: pink');

const title1 = document.createElement('h1');
title1.textContent = "I'm in a div";

const p2 = document.createElement('p');
p2.textContent = "ME TOO";

newDiv.appendChild(title1);
newDiv.appendChild(p2);

container.appendChild(newDiv);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e){
    console.log(e.target.style.background = 'blue');
});

function alertFunction(){
    alert("Hello World");
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});