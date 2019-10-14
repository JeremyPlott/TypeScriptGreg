$().ready(() => {
    $("#refresh").click(() => {
        refresh();
    });
    refresh();
});

const list = (): JQuery.jqXHR => {
    return $.getJSON("http://localhost:5000/api/users");
};
