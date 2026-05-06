import prompt from 'prompt'
import chalk from 'chalk'
import promptPassword from '../../prompts/prompt-password.js'
import handle from './handle.js'

async function createPassword() {
    prompt.get(promptPassword, async (err, result) => {
        if (err) {
            console.error(chalk.red(err))
            return
        }
        
        console.log(chalk.green("Password"))
        const password = await handle(result)
        console.log(password)
    })

    prompt.start()
}

export default createPassword