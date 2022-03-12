import { compile } from "moo";

export let lexer = compile({
    // Whitespace & comments
    ws: /[ \t]+/,
    comment: /\/\/.*/,

    // Types
    identifier: /[a-zA-Z_][a-zA-Z0-9_]*/,
    number: /[0-9]+/,
    string: /"(?:\\["\\]|[^\n"\\])*"/,

    // Keywords
    var_type: ['set', 'local', 'const',],
	type: ['string', 'int', 'boolean', 'undefined'],
    boolean: /true|false/,
    null: /null/,
    undefined: /undefined/,
    break: 'break',

    // Other stuff....
    lparen: '(',
    rparen: ')',
    lbracket: '[',
    rbracket: ']',
    lbrace: '{',
    rbrace: '}',
    longarrow: '=>',
    colon: ":",
    assign: '=',
    newline: { match: /[\n\r]+/, lineBreaks: true },
});