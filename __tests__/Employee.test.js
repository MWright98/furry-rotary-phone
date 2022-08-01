const Employee = require('../lib/employee');

test('creates an employee object', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.ID).toEqual(expect.any(Number));
    expect(employee.role).toEqual(expect.any(String));

})