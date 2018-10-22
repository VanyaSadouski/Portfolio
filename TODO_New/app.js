// <ul class=t idoCompleted>
//     <li class="flexRow">
//     <div class="task">
//     this!!!!!!
// </div>
//
// <div class="button_del">
//     <button class="deleteBtn"><i class="fa fa-times-circle"></i></button>
//     </div>
//     <div class="button_check">
//     <button class="isChecked"><i class="fa fa-check"></i></button>
//     </div>
//     </li>
//     </ul>


let data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
    todo: [],
    completed: []
};

renderToDoList();

document.getElementById('addTask').addEventListener('click', function () {
    let value = document.getElementById('textField').value;
    if (value) {
        addItem(value);
    }
});


document.getElementById('textField').addEventListener('keydown', function (e) {
    let value = document.getElementById('textField').value;
    if ((e.code === 'Enter') && value) {
        addItem(value);
    }
});

function addItem(value) {
    addItemToDOM(value);
    document.getElementById('textField').value = '';
    data.todo.push(value);
    dataObjectUpdated();
}

function renderToDoList() {
    if (!data.todo.length && !data.completed.length) return;

    for (let i = 0; i < data.todo.length; i++) {
        let value = data.todo[i];
        addItemToDOM(value);
    }
    for (let j = 0; j < data.completed.length; j++) {
        let value = data.completed[j];
        addItemToDOM(value,true);
    }
}

function dataObjectUpdated() {
    localStorage.setItem('todoList', JSON.stringify(data));
}

function removeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;
    let value = item.innerText;

    if (id === 'todo') {
        data.todo.splice(data.todo.indexOf(value), 1)
    } else {
        data.completed.splice(data.completed.indexOf(value), 1)
    }

    dataObjectUpdated();
    parent.removeChild(item);
}

function completeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;
    let value = item.innerText;

    if (id === 'noCompleted') {
        data.todo.splice(data.todo.indexOf(value), 1);
        data.completed.push(value);
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);
        data.todo.push(value);
    }

    dataObjectUpdated();

    let target = (id === 'noCompleted') ? document.getElementById('completed') : document.getElementById('noCompleted');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}


function addItemToDOM(text,completed) {
    let list = (completed)?document.getElementById('completed') : document.getElementById('noCompleted');
    let item = document.createElement('li');
    item.classList.add('flexRow');

    let textDiv = document.createElement('div');
    textDiv.classList.add('task');
    textDiv.innerText = text;
    item.appendChild(textDiv);

    let delIcon = document.createElement('i');
    delIcon.setAttribute('class','fa fa-times-circle');
    let del = document.createElement('div');
    del.classList.add('button_del');
    let delBtn = document.createElement('button');
    delBtn.classList.add('deleteBtn');
    delBtn.appendChild(delIcon);
    del.appendChild(delBtn);
    item.appendChild(del);

    delBtn.addEventListener('click',removeItem);

    let checkIcon = document.createElement('i');
    checkIcon.setAttribute('class','fa fa-check');
    let complete = document.createElement('div');
    complete.classList.add('button_check');
    let checkBtn = document.createElement('button');
    checkBtn.classList.add('isChecked');
    checkBtn.appendChild(checkIcon);
    complete.appendChild(checkBtn);
    item.appendChild(complete);
console.log(list.childNodes.hasOwnProperty('br'));
    checkBtn.addEventListener('click',completeItem);

    list.insertBefore(item, list.childNodes[0]);

}