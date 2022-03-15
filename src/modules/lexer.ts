import { compile } from 'moo';

export const lexer = compile({
	// Whitespace & comments
	ws: /[ \t]+/,
	comment: /\/\/.*/,

	// Types
	type: ['identifier', 'string', 'int', 'boolean', 'null', 'undefined'],
	identifier: /[a-zA-Z_][a-zA-Z0-9_]*/,
	number: /[0-9]+/,
	string: /"(?:\\["\\]|[^\n"\\])*"/,
	boolean: /true|false/,
	null: /null/,
	undefined: /undefined/,

	// Keywords
	var_type: ['set', 'local', 'const'],
	break: 'break',

	// Other stuff....
	lparen: '(',
	rparen: ')',
	lbracket: '[',
	rbracket: ']',
	lbrace: '{',
	rbrace: '}',
	longarrow: '=>',
	colon: ':',
	assign: '=',
	newline: { match: /[\n\r]+/, lineBreaks: true },
});
