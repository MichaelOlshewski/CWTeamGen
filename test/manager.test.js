const Manager = require('../library/manager')

test("Can set office number via constructor argument", () => {
    const testVal = 100;
    const employee = new Manager("Foo", 1, "test@test.com", testVal);
    expect(employee.officeNumber).toBe(testVal);
});
  
test("getRole() should return \"Manager\"", () => {
    const testVal = "Manager";
    const employee = new Manager("Foo", 1, "test@test.com", 100);
    expect(employee.getRole()).toBe(testVal);
});
  
test("Can get office number via getOffice()", () => {
    const testVal = 100;
    const employee = new Manager("Foo", 1, "test@test.com", testVal);
    expect(employee.getOfficeNumber()).toBe(testVal);
});