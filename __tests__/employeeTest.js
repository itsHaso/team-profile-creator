const employee = require('../lib/employee');

test('instance of employee class', () => {
    const employeeTest = new employee();
    expect(typeof(employeeTest)).toBe('object');
});

test('set name', () => {
    const testName = 'steve';
    const employeeTest = new employee(testName);
    expect(employeeTest.name).toBe(testName);
});

test('set id', () => {
    const testId = 2;
    const employeeTest = new employee('bob', testId);
    expect(employeeTest.id).toBe(testId);
});

test('set email using constructor paremter', () => {
    const emailTest = "bob@gmail.com";
    const employeeTest = new employee('bob', 3, emailTest)
    expect(employeeTest.email).toBe(emailTest);
});

test('returns name when using getName function', () => {
    const testName = 'bob';
    const employeeTest = new employee(testName);
    expect(employeeTest.getName()).toBe(testName);
});

test('returns id when using getId function', () => {
    const testId = 2;
    const employeeTest = new employee('bob', testId);
    expect(employeeTest.getId()).toBe(testId);
});

test('returns email when using getEmail function', () => {
    const emailTest = 'bob@gmail.com'
    const employeeTest = new employee('bob', 3, emailTest)
    expect(employeeTest.getEmail()).toBe(emailTest);
});

test('returns role when using getRole function', () => {
    const roleTest = "Employee";
    const employeeTest = new employee('bob', 3, 'bob@gmail.com');
    expect(employeeTest.getRole()).toBe(roleTest);
  })

