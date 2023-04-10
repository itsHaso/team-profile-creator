const intern = require('../lib/intern');

test('set school using constructor parameter', () => {
    const schoolTest = 'uconn';
    const employeeTest = new intern('bob', 3, 'bob@gmail.com', schoolTest)
    expect(employeeTest.school).toBe(schoolTest)
});

test('getRole function should return intern', () => {
    const roleTest = 'Intern';
    const employeeTest = new intern('bob', 3, 'bob@gmail.com', roleTest)
    expect(employeeTest.getRole()).toBe(roleTest);
});

test('getSchool function should get school', () => {
    const schoolTest1 = 'davis';
    const eTest = new intern('bob', 3, 'bob@gmail.com', schoolTest1);
    expect(eTest.getSchool()).toBe(schoolTest1);
  });