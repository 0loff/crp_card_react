const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@components': resolvePath('./src/components'),
            '@api': resolvePath('./src/api')
        }
    },
    jest: {
        configure: {
            moduleNameMapper: {
                '^@components(.*)$': '<rootDir>/src/components$1',
                '^@api(.*)$': '<rootDir>/src/api$1',
            },
        },
    },
}