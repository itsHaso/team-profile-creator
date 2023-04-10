const Manager = require('../lib/manager');

test('can set school using constructor parameter', () => {
    const officeTest = 3;
    const employeeTest = new Manager('bob', 3, 'bob@gmail.com', officeTest);
    expect(employeeTest.officeNumber).toBe(officeTest);
});

test('getrole function should be intern', () => {
    const roleTest = "Manager";
    const employeeTest = new Manager('bob', 3, 'bob@gmail.com', 3);
    expect(employeeTest.getRole()).toBe(roleTest);
});

test('getofficenumber function should get office number', () => {
    const officeTest1 = 3;
    const employeeTest = new Manager('bob', 3, 'bob@gmail.com', officeTest1);
    expect(employeeTest.getOfficeNumber()).toBe(officeTest1);
  });