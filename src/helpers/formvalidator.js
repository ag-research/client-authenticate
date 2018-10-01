const namex = /^[A-Za-z-]{2,}$/
const emex = /^[A-Za-z0-9-_.]+@[A-Za-z0-9-.]+\.[A-za-z]{2,6}$/
const pasex = /^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/

export const isValidName = name => {
    return name.match(namex) !== null;
} 

export const isValidEmail = email => {
    return email.match(emex) !== null;
}

export const isValidPassword = password => {
    return password.match(pasex) !== null;
}
