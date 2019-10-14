"use strict";
$().ready(() => {
    $("#refresh").click(() => {
        refresh();
    });
    refresh();
});
const list = () => {
    return $.getJSON("http://localhost:5000/api/users");
};
