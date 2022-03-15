import { compile } from 'moo';

export const lexer: moo.Lexer = compile({
	// Whitespace & comments
	ws: /[ \t]+/,
	comment: /\/\/.*/,

	// Types
	type: ['identifier', 'string', 'int', 'float', 'boolean', 'null', 'undefined'],
	identifier: /[a-zA-Z_][a-zA-Z0-9_]*/,
	int: /[0-9]+/,
	float: /^[+-]?\d+(\.\d+)?$/,
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
