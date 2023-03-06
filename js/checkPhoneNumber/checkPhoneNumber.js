function checkVietNamesePhoneNumber(phoneNumber) {
    if (
        phoneNumber.length === 12 &&
        phoneNumber.charAt(0) === '+' &&
        /^\d+$/.test(phoneNumber.substring(1, phoneNumber.length)) &&
        phoneNumber.substring(0, 3) === "+84"
    ) {
        return true;
    } else {
        throw new Error('Illegal argument exception');
    }
}
module.exports = checkVietNamesePhoneNumber