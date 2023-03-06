const checkVietNamesePhoneNumber = require("./checkPhoneNumber");

//test for right argument
const testCasesForRightArgument = [
    { phoneNumber: '+84898124854', expectedResult: true },
    { phoneNumber: '+84998888888', expectedResult: true },
    { phoneNumber: '+84987654322', expectedResult: true },
    { phoneNumber: '+84987654324', expectedResult: true },
];
testCasesForRightArgument.forEach((testCase) => {
    test(`wrong testCase at ${testCase.phoneNumber} in testCasesForRightArgument`, () => {
        expect(checkVietNamesePhoneNumber(testCase.phoneNumber)).toBe(testCase.expectedResult);
    });
});

//test for exception
const testCasesForWrongArgument = [
    //not enough phone number
    { phoneNumber: '+8489812485', expectedError: 'Illegal argument exception' },
    //too many phone number
    { phoneNumber: '+848981248543', expectedError: 'Illegal argument exception' },
    //phone number contain string
    { phoneNumber: '+8489812485h', expectedError: 'Illegal argument exception' },
    { phoneNumber: '+848981he853', expectedError: 'Illegal argument exception' },
    { phoneNumber: 'h+8489812485', expectedError: 'Illegal argument exception' },
    //phone number contain space "   "
    { phoneNumber: '+84898 12485', expectedError: 'Illegal argument exception' },
    { phoneNumber: '+8489812485 ', expectedError: 'Illegal argument exception' },
    { phoneNumber: '+ 8489812485', expectedError: 'Illegal argument exception' },
    { phoneNumber: ' +8489812485', expectedError: 'Illegal argument exception' },
    //phone number don't have + for contry code
    { phoneNumber: '848981248533', expectedError: 'Illegal argument exception' },
    //phone number don't have right vietnamecode (+84)
    { phoneNumber: '+83898124853', expectedError: 'Illegal argument exception' },
    //phone number just have space
    { phoneNumber: '+           ', expectedError: 'Illegal argument exception' },
    //phone number is empty String
    { phoneNumber: "", expectedError: 'Illegal argument exception' },
];
testCasesForWrongArgument.forEach((testCase) => {
    test(`wrong testCase at ${testCase.phoneNumber} in testCasesForWrongArgument`, () => {
        expect(() => {
            checkVietNamesePhoneNumber(testCase.phoneNumber)
        }).toThrow(testCase.expectedError);
    });
});