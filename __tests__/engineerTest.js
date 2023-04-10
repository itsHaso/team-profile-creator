const Engineer = require('../lib/engineer');

test('can set github using constructor parameter', () => { 
    const githubTest = "User";
    const employeeTest = new Engineer('bob', 3, 'bob@gmail.com', githubTest);
    expect(employeeTest.github).toBe(githubTest);
});

test('getrole function should be engineer', () => {
    const roleTest = "Engineer";
    const employeeTest = new Engineer('bob', 3, 'bob@gmail.com', 'user');
    expect(employeeTest.getRole()).toBe(roleTest);
});

test('getrole function should be engineer', () => {
    const roleTest = "Engineer";
    const employeeTest = new Engineer('bob', 3, 'bob@gmail.com', 'user');
    expect(employeeTest.getRole()).toBe(roleTest);
});