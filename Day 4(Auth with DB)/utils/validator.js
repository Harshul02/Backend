const validateName = (name)=>{
    const nameRegex = new RegExp(/[a-zA-Z][a-zA-Z]+[a-zA-Z]$/);
    return nameRegex.test(name);
}

const validateEmail = (email)=>{
    const reg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
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