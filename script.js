const todoList = document.querySelector('.todo-list');
const todoSubmit = document.querySelector('.todo-Submit');
const todoitem = document.querySelector('.todo-item');
const submitButton = document.querySelector('.todo-button');
const deleteButton = document.querySelector('.delete-button');
const body = document.querySelector('body');
const option = document.querySelector('.fa-cog');


submitButton.addEventListener("click", addtodo);
todoList.addEventListener("click", deleteCheck);

option.addEventListener('click', menuOption);


function addtodo(event) {
    event.preventDefault();
    var p = document.createElement("div");
    p.className = "todo-item";
    var todo = document.createElement("span");
    todo.className = "todo";
    if (todoSubmit.value == "") {
        alert("write a todo");
    }
    else {
        todo.innerText = todoSubmit.value;
        todoSubmit.value = "";
        p.appendChild(todo);
        var approve = document.createElement("button");
        var trash = document.createElement("button");
        approve.className = "approve-button";
        trash.className = "delete-button";
        trash.innerHTML = '<i class="far fa-trash-alt"></i>';
        approve.innerHTML = '<i class="far fa-thumbs-up"></i>';
        p.appendChild(approve);
        p.appendChild(trash);
        todoList.append(p);
    }
    //  trash.addEventListener("click", deletetodo);
    //  function deletetodo() {
    //      const parent = p.parentNode;
    //      parent.removeChild(p)
    //  };
}

function deleteCheck(e) {
    event.stopPropagation();
    const p = e.target;
    const parent = p.parentNode.parentNode;
    //const grandParent = parent.parentNode;
    console.log(parent.className);
    if (p.className == "far fa-trash-alt" || p.className == "delete-button") {
        parent.classList.add("finished");
        parent.addEventListener('transitionend', function () {
            parent.remove();
            //grandParent.removeChild(parent);
        }
        );
    }
    if (p.className == "approve-button" || p.className == "far fa-thumbs-up") {
        if (parent.className == "checked-todo-item")
            parent.className = "todo-item";
        else
            parent.className = "checked-todo-item";
        //parent.classList.toggle("complete");
    }
}



function menuOption() {
    const gear = document.querySelector('.fa-cog');
    const p = document.querySelector('.option');
    p.style.background = "white";
    p.style.height = "25vh";
    var color = document.createElement('input');
    color.className = "primary";
    var firstButton = document.createElement('button');
    firstButton.className = "firstBtn";
    var secondButton = document.createElement('button');
    secondButton.className = "secondBtn";
    var thirdButton = document.createElement('button');
    thirdButton.className = "thirdBtn";
    if (p.children.length == 0) {
        gear.style.transform = "rotate(90deg)";
        color.type = "color";
        firstButton.innerText = 'Apply';
        secondButton.innerText = "I'm feeling lucky";
        thirdButton.innerText = "Click me";
        p.appendChild(color);
        p.appendChild(firstButton);
        p.appendChild(secondButton);
        p.appendChild(thirdButton);
        //color.addEventListener("change", function (event) {
        //const main = document.querySelector('body');

        //console.log(typeof event.target.value);
        //console.log('-moz-linear-gradient(' + event.target.value + ', #9198e5);');
        //main.style.background = event.target.value;
        //}, false);
        firstButton.addEventListener("click", function (event) {
            event.preventDefault();
            const body = document.querySelector('body');
            const color = document.querySelector('.primary');
            console.log(color.value);
            body.style.backgroundColor = color.value;
        })
        secondButton.addEventListener("click", function (event) {
            event.preventDefault();
            const main = document.querySelector('body');
            var hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
            var color = "#"
            for (let i = 0; i < 6; i++) {
                color += hex[Math.floor(Math.random() * 16)]
            }
            console.log(color);
            main.style.background = color;
        })
        thirdButton.addEventListener("click", function (event) {
            event.preventDefault();
            var p = setInterval(function () {
                const main = document.querySelector('body');
                var hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
                var color = "#"

                for (let i = 0; i < 6; i++) {
                    color += hex[Math.floor(Math.random() * 16)]
                }
                main.style.background = color;
                thirdButton.innerText = "Double-click me"
            }, 2000);

            thirdButton.addEventListener('dblclick', function () {
                clearInterval(p);
                thirdButton.innerText = "Click me"
            })
        })
    }
    else {
        gear.style.transform = "rotate(-90deg)";
        const color = document.querySelector('.primary');
        const firstButton = document.querySelector('.firstBtn');
        const secondButton = document.querySelector('.secondBtn');
        const thirdButton = document.querySelector('.thirdBtn');
        color.remove();
        firstButton.remove();
        secondButton.remove();
        thirdButton.remove();
        p.style.background = "none";
        p.style.height = "0vh";
        //parent.removeChild(color);
        //parent.removeChild(r);
        //parent.removeChild(firstButton);
        //parent.removeChild(secondButton);
    }
}


