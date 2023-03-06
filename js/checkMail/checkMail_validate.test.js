const checkMail = require("./checkMail_validate");

describe("Test mail", () => {
    test("case true format mail", () => {
        const email = "a@gmail.com";
        expect(checkMail(email)).toBe(true);
        expect(email).toMatch(/^a/);
    });
    test("case false format mail", () => {
        const email = "agmailcom";
        expect(checkMail(email)).toBe(false);
        expect(email).toMatch(/^a/);
    });
});
