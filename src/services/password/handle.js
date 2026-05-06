import promptPassword from "../../prompts/prompt-password.js"

async function permittedCharacters(answers) {
    let permitted = []

    if (answers.uppercase.toLowerCase() === "s") {
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    if (answers.lowercase.toLowerCase() === "s") {
        permitted.push(..."abcdefghijklmnopqrstuvwxyz")
    }

    if (answers.numbers.toLowerCase() === "s") {
        permitted.push(..."0123456789")
    }

    if (answers.specialCharacters.toLowerCase() === "s") {
        permitted.push(..."!@#$%^&*()-_")
    }

    return permitted
}

async function handle(answers) {
    const characters = await permittedCharacters(answers)
    const passwordLength = Number(answers.length)

    let password = ""

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index]
    }

    return password
}

export default handle