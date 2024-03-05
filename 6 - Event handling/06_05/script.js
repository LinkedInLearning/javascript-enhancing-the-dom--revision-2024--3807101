document.addEventListener('DOMContentLoaded', () => {
    let agendaList = document.getElementById('agendaList');

    agendaList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            console.log(e.target.textContent + ' is removed from the agenda.');
            agendaList.removeChild(e.target);
        }
    });
});
