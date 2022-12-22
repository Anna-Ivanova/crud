function handlerClickEdit(event) {
    document.querySelector('.popup_wrapper').style.display = "block";
    if (document.body.contains(document.querySelector('.user_data'))) {
        let userInfo = document.querySelectorAll('.user_data');
        for (let i = 0; i < userInfo.length; i++) {
            userInfo[i].remove();
        }
    }

    let form = document.querySelector('.form_add');
    let inputs = form.querySelectorAll('.form-item');
    const trIndex = event.target.parentNode.getAttribute('data-user');
    document.getElementById('name').value = arrForms[trIndex].name || data[trIndex].name;
    document.getElementById('password').value = arrForms[trIndex].password || data[trIndex].password;
    document.getElementById('age').value = arrForms[trIndex].age || data[trIndex].age;
    document.getElementById('email').value = arrForms[trIndex].email || data[trIndex].email;
    document.getElementById('phone').value = arrForms[trIndex].phone || data[trIndex].phone;
    document.getElementById('card').value = arrForms[trIndex].card || data[trIndex].card;

    for (let element of inputs) {
        element.classList.add('edit');
        element.setAttribute('data-edit', trIndex);

    }
    const buttonSaveForm = document.querySelector('.btn_save');
    buttonSaveForm.style.display = 'none';
    const buttonEditForm = document.querySelector('.btn_edit');
    buttonEditForm.style.display = 'block';
    buttonEditForm.addEventListener('click', saveEditform);
}
function handlerClickView(event) {
    const btnIndex = event.target.getAttribute('data-btn');
    const thead = document.querySelector('.headrow');
    const userRow = event.target.parentNode;
    if (document.body.contains(document.querySelector('.theadrow'))) {
        document.querySelector('.theadrow').remove();

        let nameThead = document.querySelectorAll('.theadrow');
        for (let i = 0; i < nameThead.length; i++) {
            nameThead[i].remove();
        }
    }
    if (document.body.contains(document.querySelector('.user_data'))) {
        let userInfo = document.querySelectorAll('.user_data');
        for (let i = 0; i < userInfo.length; i++) {
            userInfo[i].remove();
        }
    }
    for (let key in arrForms[btnIndex]) {

        createElement('th', { className: 'theadrow' }, null, key, thead);
        createElement('td', { className: 'user_data ', name: key }, null, arrForms[btnIndex][key], userRow);

    }


}
function handlerClickRemove(event) {
    if (window.confirm("Do you really want to remove this user?")) {


        const trIndex = event.target.parentNode.getAttribute('data-user');
        const userRow = event.target.parentNode;
        delete arrForms[trIndex];
        arrForms = arrForms.filter(element => element != null);

        localStorage.setItem('user', JSON.stringify(arrForms));
        userRow.remove();
        let elements = document.querySelectorAll('tbody > tr');
        for (i = 0; i < elements.length; i++) {
            const rowElement = elements[i];
            rowElement.setAttribute('data-user', i);
            rowElement.firstChild.textContent = i + 1;
        }

        const btn_view = document.querySelectorAll('.view');
        for (i = 0; i < btn_view.length; i++) {
            const btn_elem = btn_view[i];
            btn_elem.setAttribute('data-btn', i);
            console.log(btn_elem);
        }

    }


}


function showForm() {
    document.querySelector('.popup_wrapper').style.display = "block";
    let form = document.querySelector('.form_add');
    let inputs = form.querySelectorAll('.form-item');
    for (let element of inputs) {
        element.addEventListener('blur', validateForm);
    }
}
//--------validation Form
function validateForm(event) {
    console.log(event.target);

}
function hideForm() {
    document.querySelector('.popup_wrapper').style.display = "none";
}