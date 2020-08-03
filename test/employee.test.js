const Employee = require('../lib/employee')

test("Can create employee instace", () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
})

test("Can set name with construct args", () => {
    const name = "John Doe"
    const employee = new Employee(name)
    expect(employee.name).toBe(name)
})

test("Can set ID with construct args", () => {
    const testVal = 50;
    const employee = new Employee("John", testVal)
    expect(employee.id).toBe(testVal)
})

test("Can set email with construct args", () => {
    const testVal = "example@example.com"
    const employee = new Employee("John", 1, testVal)
    expect(employee.email).toBe(testVal)
})

test("Use getName() to get name", () => {
    const testVal = "John"
    const employee = new Employee(testVal)
    expect(employee.getName()).toBe(testVal)
})

test("Use getId() to get ID", () => {
    const testVal = 50
    const employee = new Employee("John", testVal)
    expect(employee.getID()).toBe(testVal)
})

test("Use getEmail() to get email", () => {
    const testVal = "example@example.com"
    const employee = new Employee("John", 1, testVal)
    expect(employee.getEmail()).toBe(testVal)
})

test("getRole() needs to return \"Employee\"", () => {
    const testVal = "Employee"
    const employee = new Employee("John", 1, "example@example.com")
    expect(employee.getRole()).toBe(testVal)
})