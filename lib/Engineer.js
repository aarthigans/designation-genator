// import Employee constructor 
const Employee = require("./Employee");

// engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling constructor - employee
        super (name, id, email);

        this.github = github; 
    }

    // returning github from input 
    getGithub () {
        return this.github;
    }

     // override employee role to engineer
    getRole () {
        return "Engineer";
    }
}

// export 
module.exports = Engineer; 