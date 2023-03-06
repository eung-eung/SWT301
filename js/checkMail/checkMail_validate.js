checkMail = (stringName) => {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s]+$/;
    // return regex_name.test(stringName);
    if (stringName.match(emailRegex)) {
        return true;
    }
    return false;
};

module.exports = checkMail;
