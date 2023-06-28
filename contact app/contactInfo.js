class ContactInfo {
    constructor(type, value) {
        this.type = type
        this.value = value
    }
    static newContactInfo(type, value) {
        // Check if type and value are strings
        if (typeof type !== 'string' || typeof value !== 'string') {
            throw new Error('Invalid type or value. Type and value should be strings.');
        }
        return new ContactInfo(type, value);
    }
    updateType(newType) {
        // Check if newType is a string
        if (typeof newType !== 'string') {
            throw new Error('Invalid new type. New type should be a string.');
        }
        this.type = newType;
        throw new Error("Updated contact info type successfully.");
    }

    updateValue(newValue) {
        // Check if newValue is a string
        if (typeof newValue !== 'string') {
            throw new Error('Invalid new value. New value should be a string.');
        }
        this.value = newValue;
        throw new Error("Updated contact info value successfully.");
    }

}


module.exports = ContactInfo