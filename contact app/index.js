//Driver Code

const User = require("./User");

try {
    const admin1 = User.newAdmin("yash", "yash1234")
    console.log("admin1>>>", admin1)
    const user1 = admin1.newUser("ritik", "ravi1234")
    console.log("user1>>>", user1)
    // const user2 = user1.newUser("Ravi", "ravi1234")
    // console.log("user2>>>", user2)
    admin1.updateUser("ritik1234", "name", "Ravi")
    user1.newContact("Vivek")
} catch (error) {
    console.log(error.message)
}

