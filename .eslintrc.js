module.exports = {
    'env': {
        'es6': true
    },
    'parser': 'babel-eslint',
    'parserOptions': {
        "sourceType": "module",
    },
    'extends': 'eslint:recommended',
    'rules': {
        'indent': [
            'error',
            4,
            { 'MemberExpression': 1 }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single',
            { 'allowTemplateLiterals': true }
        ],
        'semi': [
            'error',
            'always'
        ],
        'max-len': [
            'error',
            { 
                'code': 110,
                'ignoreStrings': true 
            }
        ],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: 'block-like', next: '*' }
        ],

        // enforce spacing between functions and their invocations
        // https://eslint.org/docs/rules/func-call-spacing
        'func-call-spacing': ['error', 'never'],

        // enforces use of function declarations or expressions
        // https://eslint.org/docs/rules/func-style
        'func-style': ['off', 'declaration'],

        // disallow padding within blocks
        // https://eslint.org/docs/rules/padded-blocks
        'padded-blocks': ['error', 'never'],

        // enforce consistent spacing before function parentheses and as such, will warn whenever whitespace doesn’t match the preferences specified.
        // https://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'never'
        }],
    },
    'globals': {
        'angular': false,
        '$': false,
        'cordova': false,
        'StatusBar': false,
        'universalLinks': false,
        'ionic': false,
        'PouchDB': false,
        'Connection': false,
        'device': false,
        'require': false,
        'console': false,
        'navigator': false,
        'window': false,
        'fetch': false,
        'moment': false,
        'document': false,
      }
};