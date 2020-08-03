const Engineer = require('../lib/engineer')

test("Can set the GitHub account with construct", () => {
    const testVal = "Engineer"
    const employee = new Engineer("Jane", 1, "example@example.com", testVal)
    expect(employee.github).toBe(testVal)
})

test("getRole() should return \"Engineer\"", () => {
    const testVal = "Engineer"
    const employee = new Engineer("Jane", 1, "example@example.com", "GitHubUser")
    expect(employee.getRole()).toBe(testVal)
})

test("Can get GitHub username with getGithub()", () => {
    const testVal = "GitHubUser"
    const employee = new Engineer("Jane", 1, "example@example.com", testVal)
    expect(employee.getGithub()).toBe(testVal)
})