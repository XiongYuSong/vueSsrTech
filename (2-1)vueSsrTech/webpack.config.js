const path = require('path')

module.exports = {
    entry:{
        main: './src/index.js'
    },
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader'],
            },
        ]
    }
}
