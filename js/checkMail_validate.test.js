const checkMail = require('./checkMail_validate')

describe('test login', () => {
    test('should be true', () => {
        var stringName = 'a@gmail.com'
        expect(checkMail(stringName)).toBe(true)
        expect(stringName).toMatch(/^a/)
     }
    )
    test('should be true', () => {
        var stringName = 'agmailcom'
        expect(checkMail(stringName)).toBe(false)
        expect(stringName).toMatch(/^a/)
     }
    )
    
})


