module.exports = {
    presets: [
        ['@babel/preset-env', { modules: false }]
    ],
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ]
}
