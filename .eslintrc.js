module.exports = {
    root: true,
    extends: [],
    rules: {
        'import/no-unresolved': [
            'error', { ignore: ['iem:./modules/*'] }],
    },
}
