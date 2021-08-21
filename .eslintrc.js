module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: ['error', 'never'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'preferButton'],
      },
    ],
    'react/prop-types': 0,
    'no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'none',
      },
    ],
    'object-curly-newline': 0,
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'max-len': ['error', 150],
  },
  // Configuração para o Gatsby
  settings: {
    'import/core-modules': ['react'],
  },
}
