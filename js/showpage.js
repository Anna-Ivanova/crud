function showUsersFirstLoad() {
    const tbody = document.getElementById('tbody');
    for (let i = 0; i < data.length; i++) {
        const userrow = document.createElement('tr');
        userrow.setAttribute('data-user', i);
        tbody.appendChild(userrow);
        createElement('td', null, null, i + 1, userrow);
        createElement('td', null, null, data[i].name, userrow);
        createElement('button', { className: 'btn edit', type: 'button' },
            { click: handlerClickEdit }, 'EDIT', userrow);
        createElement('button', { className: 'btn view', type: 'button', data_btn: i },
            { click: handlerClickView }, 'VIEW', userrow);
        createElement('button', { className: 'btn remove', type: 'button' },
            { click: handlerClickRemove }, 'REMOVE', userrow);

    }

}
function showUsersLocalStor() {
    const tbody = document.getElementById('tbody');
    for (let i = 0; i < arrForms.length; i++) {

        const userrow = document.createElement('tr');
        userrow.setAttribute('data-user', i);
        tbody.appendChild(userrow);
        createElement('td', null, null, i + 1, userrow);
        createElement('td', null, null, arrForms[i].name, userrow);
        createElement('button', { className: 'btn edit', type: 'button' },
            { click: handlerClickEdit }, 'EDIT', userrow);
        createElement('button', { className: 'btn view', type: 'button', data_btn: i },
            { click: handlerClickView }, 'VIEW', userrow);
        createElement('button', { className: 'btn remove', type: 'button' },
            { click: handlerClickRemove }, 'REMOVE', userrow);
    }

}