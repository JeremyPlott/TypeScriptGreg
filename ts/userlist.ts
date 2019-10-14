let users: User[] = [
    // new User(1, "sa", "sa", "System", "Admin", "513-555-1212", "sa@adm.com", true, true),
    // new User(2, "rv", "rv", "System", "Reviewer", "513-555-1212", "rv@adm.com", true, false),
    // new User(3, "us", "us", "System", "User", "513-555-1212", "us@adm.com", false, false)
];

const refresh = (): void => {
    list().done((res) => {
        console.log("Users:", res);
        display(res as User[]);
    });
}

const display = (users: User[]): void => {
    let tbody = $("tbody");
    tbody.html("");
    for(let user of users) {
        let tr = $("<tr></tr>");
        tr.append(`<td>${user.id}</td>`);
        tr.append(`<td>${user.username}</td>`);
        tr.append(`<td>${user.password}</td>`);
        tr.append(`<td>${user.firstname}</td>`);
        tr.append(`<td>${user.lastname}</td>`);
        tr.append(`<td>${user.phone}</td>`);
        tr.append(`<td>${user.email}</td>`);
        tr.append(`<td>${user.isReviewer ? "Yes" : "No"}</td>`);
        tr.append(`<td>${user.isAdmin ? "Yes" : "No"}</td>`);
        tbody.append(tr);
    }
}