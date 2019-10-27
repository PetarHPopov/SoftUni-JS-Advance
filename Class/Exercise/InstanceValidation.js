class CheckingAccount {
    _clientId;
    _email;
    _firstName;
    _lastName;
    constructor(clientId,email,firstName,lastName){
        this.clientId = Number(clientId);
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        const regex = /^\d{6}$/g;
        if (!regex.test(value)){
         throw new TypeError("Client ID must be a 6-digit number");
        }
        this._clientId = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        let emailPatern = /^[a-zA-Z0-9]+@[a-zA-Z.]+$/g;
        if(!emailPatern.test(value)){
            throw new TypeError("Invalid e-mail")
        }
        this._email = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this.nameValidation(value,"First");
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this.nameValidation(value,"Last");
        this._lastName = value;
    }
    nameValidation(value,prop){
        if (value.length < 3 || value.length > 20){
          throw new TypeError (`${prop} name must be between 3 and 20 characters long`)
        }
        const patern = /^[A-Za-z]+$/g;
        if (!patern.test(value)){
         throw new TypeError(`${prop} name must contain only Latin characters`);
        }
    }
}

