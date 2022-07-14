// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Name1', 90, 'name1@gmail.com', 11);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Name1', 90, 'name1@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 