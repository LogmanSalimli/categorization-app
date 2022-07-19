const mainContainer = document.getElementById('mainContainer');
const mainCategory = document.getElementById('mainCategory');
const mainAddButton = document.getElementById('mainAddButton');

let lastId = 0
const setId = () => {
    lastId++;
    return lastId;
}

const addCategory = (e) => {
    const parent = e.target.parentElement;
    const newId = setId();

    const addForm = document.createElement('form',);
    addForm.id = newId
    const input = document.createElement('input');
    const submit = document.createElement('button');
    const cancel = document.createElement('button');
    input.placeholder = "Enter name";
    submit.innerText = "ok";
    submit.type = "submit";
    cancel.type = "button";
    cancel.innerText = "-";
    addForm.append(input, submit, cancel);
    parent.append(addForm);
    input.focus();

    const confirmAdding = (e) => {
        e.preventDefault()

        const form = document.getElementById(newId);
        form.parentElement.removeChild(form);

        const newCategory = document.createElement('div');
        newCategory.className = 'item';
        newCategory.id = newId;
        const span = document.createElement('span');
        span.innerText = input.value;

        const btn = document.createElement('button');
        btn.addEventListener('click', addCategory)
        btn.innerText = '+';
        btn.addEventListener('click', addCategory)

        newCategory.append(span, btn);
        parent.append(newCategory)
    }
    const cancelAdding = (e) => {
        e.preventDefault()
        const form = document.getElementById(newId);
        form.parentElement.removeChild(form);
    }


    addForm.addEventListener('submit', confirmAdding);
    cancel.addEventListener('click', cancelAdding);

    parent.className = parent.className === 'item' || 'container' ? 'container' : 'item';


}

mainAddButton.addEventListener('click', addCategory);
