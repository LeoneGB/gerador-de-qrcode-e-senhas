import chalk from "chalk";

const promptPassword = [
    {
        name: "uppercase",
        description: chalk.green("Permitir letras maiúsculas? (s/n)"),
        pattern: /^[sn]$/i,
        message: chalk.red.italic("Escolha apenas entre s e n"),
        required: true,
    },

    {
        name: "lowercase",
        description: chalk.green("Permitir letras minúsculas? (s/n)"),
        pattern: /^[sn]$/i,
        message: chalk.red.italic("Escolha apenas entre s e n"),
        required: true,
    },

    {
        name: "numbers",
        description: chalk.green("Permitir números? (s/n)"),
        pattern: /^[sn]$/i,
        message: chalk.red.italic("Escolha apenas entre s e n"),
        required: true,
    },
    
    {
        name: "specialCharacters",
        description: chalk.green("Permitir caracteres especiais? (s/n)"),
        pattern: /^[sn]$/i,
        message: chalk.red.italic("Escolha apenas entre s e n"),
        required: true,
    },

    {
        name: "length",
        description: chalk.green("Defina o tamanho da senha"),
        pattern: /^(?:[5-9]|1[0-9]|20)$/,
        message: chalk.red.italic("Mínimo: 5, máximo: 20"),
        required: true,
    },
]

export default promptPassword