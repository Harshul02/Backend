const validateName = (name)=>{
    const nameRegex = new RegExp(/[a-zA-Z][a-zA-Z]+[a-zA-Z]$/);
    return nameRegex.test(name);
}

const validateEmail = (email)=>{
    const reg = new RegExp(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/);
    return reg.test(email);
}

const validatePassword = (password)=>{
    const regPass = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    return regPass.test(password);
}

module.exports = {
    validateName,
    validateEmail,
    validatePassword
}