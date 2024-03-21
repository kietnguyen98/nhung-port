module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'vue',
        'prettier',
        'unused-imports',
        'simple-import-sort',
    ],
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './src']],
                extensions: ['.ts', '.vue', '.json'],
            },
        },
    },
    rules: {
        // plugins
        'unused-imports/no-unused-imports': 'error',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        // rules
        'linebreak-style': [
            'error',
            process.platform === 'win32' ? 'windows' : 'unix',
        ],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        camelcase: ['error', { properties: 'always' }],
        'line-comment-position': ['error', { position: 'above' }],
        'no-use-before-define': [
            'error',
            {
                functions: true,
                classes: true,
                variables: true,
                allowNamedExports: false,
            },
        ],
        'dot-notation': ['error'],
        eqeqeq: ['error'],
        'no-console': ['warn'],
        'no-debugger': ['warn'],
        'no-var': ['error'],
    },
};
