checkMail = (stringName) =>{
    let regex_name = /^[^\s@]+@[^\s@]+\.[^\s]+$/
    // return regex_name.test(stringName);
if(stringName.match(regex_name)){
    return true
} return false
}

module.exports = checkMail