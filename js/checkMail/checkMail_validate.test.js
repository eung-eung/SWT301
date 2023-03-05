const checkMail = require('./checkMail_validate')

describe('Test mail', () => {
    test('case true format mail', () => {
        var stringName = 'a@gmail.com'
        expect(checkMail(stringName)).toBe(true)
        expect(stringName).toMatch(/^a/)
    }
    )
    test('case false format mail', () => {
        var stringName = 'agmailcom'
        expect(checkMail(stringName)).toBe(false)
        expect(stringName).toMatch(/^a/)
    }
    )

})


