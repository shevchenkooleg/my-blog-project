module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:i18next/recommended'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next'
    ],
    rules: {
        '@typescript-eslint/indent': [2, 4],
        indent: ['error', 4],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/semi': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-multiple-empty-lines': 'off',
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-misused-promises': [0],
        '@typescript-eslint/no-floating-promises': [0],
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        'max-len': ['error', { ignoreComments: true, code: 100 }]


    },
    globals: {
        __IS_DEV__: true
    }
}
