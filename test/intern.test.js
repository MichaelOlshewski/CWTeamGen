const Intern = require('../lib/intern')

test("Can get school with construct", () => {
    const testVal = "CWRU"
    const employee = new Intern("Josh", 1, "example@example.com", testVal)
    expect(employee.school).toBe(testVal)
})

test("getRole() should return \"Intern\"", () => {
    const testVal = "Intern"
    const employee = new Intern("Josh", 1, "example@example.com", "CWRU")
    expect(employee.getRole()).toBe(testVal)
})

test("Can get school with construct", () => {
    const testVal = "CWRU"
    const employee = new Intern("Josh", 1, "example@example.com", testVal)
    expect(employee.getSchool()).toBe(testVal)
})