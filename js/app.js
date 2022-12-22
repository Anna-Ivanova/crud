let arrForms = JSON.parse(localStorage.getItem('user')) || [];

if (localStorage.getItem("user") === null) {
    showUsersFirstLoad();
    localStorage.setItem('user', JSON.stringify(data));
    arrForms = JSON.parse(localStorage.getItem('user'));
    console.log(arrForms);
}
else {
    showUsersLocalStor();
}

const buttonAddForm = document.querySelector('.btn_add');
buttonAddForm.addEventListener('click', showForm);

const buttonCancelForm = document.querySelector('.btn_cancel');
buttonCancelForm.addEventListener('click', hideForm);


console.log(arrForms);


