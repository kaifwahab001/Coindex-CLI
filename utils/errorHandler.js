require('colors')

let isRegistered = false

function isPromptCancellation(error) {
    if (!error) {
        return false
    }

    const msg = String(error.message || '')
    return error.name === 'ExitPromptError' || msg.includes('SIGINT')
}

function printReadableError(error) {
    if (isPromptCancellation(error)) {
        console.log('\nOperation cancelled by user.'.yellow)
        return 0
    }

    if (error && error.message) {
        console.log(`Error: ${error.message}`.red)
        return 1
    }

    console.log('Unexpected error occurred.'.red)
    return 1
}

function registerGlobalErrorHandlers() {
    if (isRegistered) {
        return
    }

    isRegistered = true

    process.on('unhandledRejection', error => {
        process.exitCode = printReadableError(error)
    })

    process.on('uncaughtException', error => {
        process.exitCode = printReadableError(error)
    })

    process.on('SIGINT', () => {
        console.log('\nProcess interrupted by user.'.yellow)
        process.exit(0)
    })
}

module.exports = {
    registerGlobalErrorHandlers
}
