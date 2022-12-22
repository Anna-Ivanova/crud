
function showForm() {
    document.querySelector('.popup_wrapper').style.display = "block";
    let form = document.querySelector('.form_add');
    let inputs = form.querySelectorAll('.form-item');
    const buttonSaveForm = document.querySelector('.btn_save');
    buttonSaveForm.style.display = 'block';
    const buttonEditForm = document.querySelector('.btn_edit');
    buttonEditForm.style.display = 'none';
    for (let element of inputs) {
        element.classList.add('original');

    }

    buttonSaveForm.addEventListener('click', checkForm);

}
//--------validation Form
function isName(name) {
    const regExpresName = /^[A-Z][a-z]{3,}$/;
    return regExpresName.test(name);
}
function isPassword(password) {
    const regExpresPassw = /^([A-Z])?[a-zA-Z0-9]{7,16}$/;
    return regExpresPassw.test(password);

}
function isEmail(email) {
    const regExpresEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/i;

    return regExpresEmail.test(email);
}
function isPhone(phone) {
    const regExpresTel = /^[\d\+][\d\(\)\ -]{9,16}\d$/;

    return regExpresTel.test(phone);
}
function isCard(card) {
    const regExpresCard = /^\d{4}[\s\-]?\d{4}[\s\-]?\d{4}[\s\-]?\d{4}$/;

    return regExpresCard.test(card);
}


function setError(input, message) {
    let errorBlock = input.nextElementSibling;
    errorBlock.textContent = message;

}
function setValid(input) {
    let valid = input.nextElementSibling;
    valid.textContent = '';
    input.classList.add('valid');
}


function validateName(name) {
    if (name.value === '') {
        setError(name, 'User name cannot be blank');
        result = false;
    }
    else if (!isName(name.value)) {
        setError(name, "^ Pls input correct name");
        result = false;
    }
    else {
        setValid(name);
        result = true;
    }
    return result;
}
function validatePassword(password) {
    if (password.value === '') {
        setError(password, 'Password cannot be blank');
        result = false;
    }
    else if (!isPassword(password.value)) {
        setError(password, "^ Pls input correct password");
        result = false;
    }
    else {
        setValid(password);
        result = true;
    }
    return result;
}
function validateAge(age) {
    if (age.value === '') {
        setError(age, 'User name cannot be blank');
        result = false;
    }
    else {
        setValid(age);
        result = true;
    }
    return result;
}
function validateEmail(email) {
    if (email.value === '') {
        setError(email, 'Email cannot be blank');
        result = false;
    }
    else if (!isEmail(email.value)) {
        setError(email, "^ Pls input correct email");
        result = false;
    }
    else {
        setValid(email);
        result = true;
    }
    return result;
}
function validatePhone(phone) {
    if (phone.value === '') {
        setError(phone, 'phone cannot be blank');
        result = false;
    }
    else if (!isPhone(phone.value)) {
        setError(phone, "^ Pls input correct phone");
        result = false;
    }
    else {
        setValid(phone);
        result = true;
    }
    return result;
}
function validateCard(card) {
    if (card.value === '') {
        setError(card, 'Card cannot be blank');
        result = false;
    }
    else if (!isCard(card.value)) {
        setError(card, "^ Pls input correct card");
        result = false;
    }
    else {
        setValid(card);
        result = true;
    }
    return result;
}
/*-------------------------------------------------------------- */

function validateFormLast() {
    const userName = document.getElementById('name');
    const password = document.getElementById('password');
    const age = document.getElementById('age');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const card = document.getElementById('card');
    if (validateName(userName) && validatePassword(password) && validateAge(age) && validateEmail(email) && validatePhone(phone) && validateCard(card)) {
        return true;
    }
}

function hideForm() {
    document.querySelector('.form_add').reset();
    document.querySelector('.popup_wrapper').style.display = "none";
}

//-----------------------//
function checkForm(event) {
    event.preventDefault();

    let form = document.querySelector('.form_add');
    let inputs = form.querySelectorAll('.form-item');

    if (validateFormLast()) {
        let validInputs = document.querySelectorAll('.original');
        let newUser = {};
        for (let element of validInputs) {
            newUser[element.name] = element.value;
            console.log(newUser[element.name]);
        }
        arrForms.push(newUser);
        console.log(arrForms);
        localStorage.setItem('user', JSON.stringify(arrForms));

        form.reset();
        hideForm();
        for (let element of validInputs) {
            element.classList.remove('original');
        }
        const tbody = document.getElementById('tbody');
        const lastRow = document.querySelector('tbody > tr:last-child');
        const lastIndex = lastRow.getAttribute('data-user');

        const correctInd = (parseInt(lastIndex)) + 1;
        const userrow = document.createElement('tr');
        userrow.setAttribute('data-user', correctInd);
        tbody.appendChild(userrow);
        createElement('td', null, null, correctInd + 1, userrow);
        createElement('td', null, null, arrForms[correctInd].name, userrow);
        createElement('button', { className: 'btn edit', type: 'button' },
            { click: handlerClickEdit }, 'EDIT', userrow);
        createElement('button', { className: 'btn view', type: 'button', data_btn: correctInd },
            { click: handlerClickView }, 'VIEW', userrow);
        createElement('button', { className: 'btn remove', type: 'button' },
            { click: handlerClickRemove }, 'REMOVE', userrow);
    }
}

function saveEditform(event) {
    event.preventDefault();
    let form = document.querySelector('.form_add');
    const indexUser = document.querySelector('.form-item').getAttribute('data-edit');
    let editInputs = document.querySelectorAll('.edit');


    if (validateFormLast()) {
        const newName = document.getElementById('name').value;
        const newPassw = document.getElementById('password').value;
        const newAge = document.getElementById('age').value;
        const newEmail = document.getElementById('email').value;
        const newPhone = document.getElementById('phone').value;
        const newCard = document.getElementById('card').value;
        arrForms[indexUser].name = document.getElementById('name').value;
        arrForms[indexUser].name = newName;
        arrForms[indexUser].password = newPassw;
        arrForms[indexUser].age = newAge;
        arrForms[indexUser].email = newEmail;
        arrForms[indexUser].phone = newPhone;
        arrForms[indexUser].card = newCard;
        localStorage.setItem('user', JSON.stringify(arrForms));
        const userRow = document.querySelector(`[data-user="${indexUser}"]`);
        let children = userRow.children;
        const editName = children.item(1);
        editName.textContent = newName;

        if (document.body.contains(document.querySelector('.user_data'))) {
            let userInfo = document.querySelectorAll('.user_data');
            userInfo[0].textContent = newName;
            userInfo[1].textContent = newPassw;
            userInfo[2].textContent = newAge;
            userInfo[3].textContent = newEmail;
            userInfo[4].textContent = newPhone;
            userInfo[5].textContent = newCard;
        }

        form.reset();

        hideForm();

        editInputs = document.querySelectorAll('.edit');
        for (let element of editInputs) {
            element.classList.remove('edit');
            element.classList.remove('valid');
            element.removeAttribute('data-edit');

        }
    }


}
