import importPlugin from 'eslint-plugin-import'

export default [
    {
        languageOptions: {
            sourceType: 'module',
            globals: {
                console: 'readonly',
                process: 'readonly'
            }
        },
        plugins: {
            import: importPlugin,
        },
        rules: {
            'no-unused-vars': ['warn', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
            'no-undef': 'error',
            'import/no-unresolved': 'error',
        },
        files: ['**/*.js'],
    },
    {
        files: ['**/*.test.js', '**/__tests__/**/*.js'], // Asegúrate de que coincidan con tus archivos de pruebas
        languageOptions: {
            globals: {
                describe: 'readonly',
                it: 'readonly',
                test: 'readonly',
                expect: 'readonly',
                beforeAll: 'readonly',
                afterAll: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
            },
        },
        rules: {
            // Puedes agregar reglas específicas para los archivos de pruebas aquí si lo deseas
            'no-undef': 'off', // Desactiva no-undef para Jest
        },
    }
];