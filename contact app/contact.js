class Contact {
    constructor(cName) {
        this.cName = cName
        this.contactInfos = []
    }
    static newContact(cName) {
        //cName check
        if (typeof cName !== 'string') {
            throw new Error('Invalid contact name. Contact name should be a string.');
        }
        return new Contact(cName)
    }
    updateName(newName) {
        // Check if newName is a string
        if (typeof newName !== 'string') {
            throw new Error('Invalid new name. New name should be a string.');
        }
        this.cName = newName;
        throw new Error("Updated contact name successfully.");
    }
}

module.exports = Contact


/* class Contact {
    static allContact=[]
    constructor(cName,contactInfos, isUser) {
        this.cName = cName
        this.contactInfos = contactInfos
        this.isUser= isUser
    }
    static newContact(cName, contactInfos) {
        //check cname is string
        if (typeof cName !== 'string') {
            throw new Error('Invalid contact name. Contact name should be a string.');
        }
        if(typeof contactInfos !== 'number'){
            throw new Error('Invalid contact number. Contact name should be a number.');
        }
        //check not admin
        if (this.isAdmin){
            throw new Error("Admin Cannot Create Contacts")
        }
        let [isContactExist, indexOfContact] = this.findContact(cName)
        if (isContactExist) {
            throw new Error("Contact Doesnot Exist")
        }

        const contact = new Contact(cName,contactInfos,false)
        Contact.allContact.push(contact)
        return Contact

        //return new Contact(cName)
        
    }
    findContact(cName) {
        //check cname is string
        if (typeof cName !== 'string') {
            throw new Error('Invalid contact name. Contact name should be a string.');
        }
        for (let index = 0; index < Contact.allContact.length; index++) {
            if (Contact.allContact[index].cName == cName) {
                return [true, index]
            }
        }
        return [false, -1]

    }
} */
