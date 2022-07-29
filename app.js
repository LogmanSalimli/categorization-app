const mainContainer = document.getElementById('mainContainer');
const mainCategory = document.getElementById('mainCategory');
const mainAddButton = document.getElementById('mainAddButton');

let lastId = 0
const setId = () => {
    lastId++;
    return lastId;
}

const addCategory = (e) => {
    const parent = e.target.id === 'mainAddButton' ? e.target.parentElement : document.getElementById(e.target.id.slice(6));
    const newId = setId();

    const addForm = document.createElement('form',);
    addForm.id = newId
    const input = document.createElement('input');
    const submit = document.createElement('button');
    const cancel = document.createElement('button');
    input.placeholder = "Enter name";
    submit.innerHTML = "&#x2713;";
    submit.type = "submit";
    submit.classList.add("confirmBtn");
    cancel.type = "button";
    cancel.classList.add("cancelBtn")
    cancel.innerHTML = "&#xD7;";
    addForm.append(input, submit, cancel);
    parent.append(addForm);
    input.focus();

    const confirmAdding = (e) => {
        e.preventDefault()
        if (input.value === '') {
            alert("Category name can not be empty");
            return;
        }
        const form = document.getElementById(newId);
        form.parentElement.removeChild(form);

        const newCategory = document.createElement('div');
        newCategory.className = 'item';
        newCategory.id = newId;
        const span = document.createElement('span');
        span.innerText = input.value;
        span.id = 'span' + newId;
        const controls = document.createElement('div');
        controls.id = 'controls' + newId;
        controls.classList.add('controls');

        const addBtn = document.createElement('button');
        addBtn.innerText = '+';
        addBtn.id = 'addBtn' + newId;
        addBtn.classList.add("addBtn")
        addBtn.addEventListener('click', addCategory)

        const editCategory = (e) => {
            const category = document.getElementById(newId);
            span.classList.add('isEditing');
            controls.classList.add('isEditing');

            const editForm = document.createElement('form');
            editForm.classList.add('editForm');
            const input = document.createElement('input');
            input.value = category.firstElementChild.innerText;

            const confirmEditBtn = document.createElement('button');
            confirmEditBtn.classList.add("confirmBtn");
            confirmEditBtn.innerHTML = "&#x2713;";
            confirmEditBtn.type = 'submit';

            const confirmEdit = (e) => {
                e.preventDefault();
                span.innerText = input.value;
                span.classList.remove('isEditing');
                controls.classList.remove('isEditing');
                category.removeChild(editForm);
            }
            confirmEditBtn.addEventListener('click', confirmEdit);

            const cancelEditBtn = document.createElement('button');
            cancelEditBtn.classList.add("cancelBtn");
            cancelEditBtn.type = 'button';
            cancelEditBtn.innerHTML = "&#xD7;";
            const cancelEdit = (e) => {
                e.preventDefault();
                span.classList.remove('isEditing');
                controls.classList.remove('isEditing');
                category.removeChild(editForm);
            }
            cancelEditBtn.addEventListener('click', cancelEdit);

            editForm.append(input, confirmEditBtn, cancelEditBtn);
            category.insertAdjacentElement("afterbegin", editForm);
            input.focus()
        };

        const editBtn = document.createElement('button');
        editBtn.innerText = '/';
        editBtn.classList.add("editBtn");
        editBtn.addEventListener('click', editCategory);

        const deleteCategory = () => {
            const category = document.getElementById(newId);
            category.parentElement.removeChild(category);
        };
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '-';
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.addEventListener('click', deleteCategory);

        controls.append(addBtn, editBtn, deleteBtn)
        newCategory.append(span, controls);
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
