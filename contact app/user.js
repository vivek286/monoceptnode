const Contact = require("./contact")

class User {
    static allUser = []
    constructor(name, username, isAdmin) {
        this.name = name
        this.username = username
        this.isAdmin = isAdmin
        this.contacts = []
    }
    static findUser(username) {
        //type validation
        if(typeof username != "string"){
            throw new Error('Invalid User name. User name should be a string.');
        }

        for (let index = 0; index < User.allUser.length; index++) {
            if (User.allUser[index].username == username) {
                return [true, index]
            }
        }
        return [false, -1]
    }
    findContact(cName) {
        //check cname is string
        if (typeof cName !== 'string') {
            throw new Error('Invalid contact name. Contact name should be a string.');
        }
        for (let index = 0; index < this.contacts.length; index++) {
            if (this.contacts[index].cName == cName) {
                return [true, index]
            }
        }
        return [false, -1]

    } 
    newContact(cName) {
        //check cname is string
        if (typeof cName !== 'string') {
            throw new Error('Invalid contact name. Contact name should be a string.');
        }
        //check not admin
        if (this.isAdmin){
            throw new Error("Admin Cannot Create Contacts")
        }
        let [isContactExist, indexOfContact] = this.findContact(cName)
        if (isContactExist) {
            throw new Error("Contact Doesnot Exist")
        }

        const newContact = Contact.newContact(cName)
        this.contacts.push(newContact)
        return newContact
    } 
    updateContact(cName, parameter, newValue) {
        // Check if cName is a string
        if (typeof cName !== 'string') {
            throw new Error('Invalid contact name. Contact name should be a string.');
        }
        // Check if not admin
        if (this.isAdmin) {
            throw new Error("Admin cannot update contacts.");
        }
        let [isContactExist, indexOfContact] = this.findContact(cName);
        if (!isContactExist) {
            throw new Error("Contact does not exist.");
        }
        switch (parameter) {
            case "name":
                this.contacts[indexOfContact].updateName(newValue);
                break;
            case "type":
                this.contacts[indexOfContact].updateType(newValue);
                break;
            case "value":
                this.contacts[indexOfContact].updateValue(newValue);
                break;
                default:
                    throw new Error("Invalid parameter.");
            }
    }

    deleteContact(cName) {
        // Check if cName is a string
        if (typeof cName !== 'string') {
            throw new Error('Invalid contact name. Contact name should be a string.');
        }
        // Check if not admin
        if (this.isAdmin) {
            throw new Error("Admin cannot delete contacts.");
        }
        let [isContactExist, indexOfContact] = this.findContact(cName);
        if (!isContactExist) {
            throw new Error("Contact does not exist.");
        }
        // Remove contact from contacts array using splice()
        this.contacts.splice(indexOfContact, 1);
        throw new Error("Contact deleted successfully.");
    }

    static newAdmin(name, username) {
        //type validation - name -username
        if (typeof name !== 'string' || typeof username !== 'string') {
            throw new Error('Invalid name or username. Name and username should be strings.');
        }
        
        let [isUserExist, indexOfUserFound] = User.findUser(username)
        if (isUserExist) {
            throw new Error("Username Already Exist")
        }
        const admin = new User(name, username, true)
        User.allUser.push(admin)
        return admin
    }
    newUser(name, username) {
        //type validation - name -username
        if (typeof name !== 'string' || typeof username !== 'string') {
            throw new Error('Invalid name or username. Name and username should be strings.');
        }
        //check
        if (!this.isAdmin) {
            throw new Error("Unauthorized")
        }
        let [isUserExist, indexOfUserFound] = User.findUser(username)
        if (isUserExist) {
            throw new Error("Username Already Exist")
        }
        const user = new User(name, username, false)
        User.allUser.push(user)
        return user
    }
    getAllUser() {
        //type validation - name -username
        if ( typeof username !== 'string') {
            throw new Error('Invalid name or username. Name and username should be strings.');
        }
        //check
        if (!this.isAdmin) {
            throw new Error("Unauthorized")
        }
        return User.allUser
    }
    updateUser(username, parameter, newValue) {
        //type validation - name -username
        if (typeof username !== 'string') {
            throw new Error('Invalid name or username. Name and username should be strings.');
        }
        //check
        if (!this.isAdmin) {
            throw new Error("Unauthorized")
        }
        let [isUserExist, indexOfUserFound] = User.findUser(username)
        if (!isUserExist) {
            throw new Error("Username Does not Exist")
        }
        switch (parameter) {
            case "name": User.allUser[indexOfUserFound].updateName(newValue)
                break;
            case "username": User.allUser[indexOfUserFound].updateUsername(newValue)
                break;
            default:
                throw new Error("Invalid Parameter")

        }
    }
    updateName(newName) {
        //newName string check
        if(typeof newName !== 'string'){
         throw new Error("Invalid Name, New Name must be string");
        }
        let [isUserExist, indexOfUserFound] = User.findUser(newName)
        if (isUserExist) {
            throw new Error("Newname Already Exists")
        }
        this.name = newName
        throw new Error("Updated Name  Successfully")
    }
    updateUsername(newUsername) {
        let [isUserExist, indexOfUserFound] = User.findUser(newUsername)
        if (isUserExist) {
            throw new Error("Username Already Exists")
        }
        this.username = newUsername
        throw new Error("Updated Username  Successfully")
    }
    deleteUser(username) {
        if (!this.isAdmin) {
            throw new Error("Unauthorized")
        }
        let [isUserExist, indexOfUserFound] = User.findUser(username)
        if (!isUserExist) {
            throw new Error("Username Does not Exist")
        }
        // Remove user from allUser array using slice()
        User.allUser = User.allUser.slice(0, indexOfUserFound).concat(User.allUser.slice(indexOfUserFound + 1));  
        throw new Error("Deleted Successfully")
    }



}

module.exports = User