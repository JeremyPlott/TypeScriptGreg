class User { 

    constructor(
        public id: number, public username: string, 
        public password: string,
        public firstname: string, public lastname: string,
        public phone: string, public email: string,
        public isReviewer: boolean, public isAdmin: boolean
    ) {
        this.id = id; 
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.isReviewer = isReviewer;
        this.isAdmin = isAdmin;
    }
}