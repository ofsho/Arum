// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }
declare var comment: any;
declare var identifier: any;
declare var assign: any;
declare var lparen: any;
declare var rparen: any;
declare var comma: any;
declare var string: any;
declare var int: any;
declare var float: any;
declare var boolean: any;
declare var lbracket: any;
declare var rbracket: any;
declare var longarrow: any;
declare var lbrace: any;
declare var rbrace: any;
declare var newline: any;
declare var ws: any;

import { lexer } from '../lexer.ts';

interface NearleyToken {
  value: any;
  [key: string]: any;
};

interface NearleyLexer {
  reset: (chunk: string, info: any) => void;
  next: () => NearleyToken | undefined;
  save: () => any;
  formatError: (token: never) => string;
  has: (tokenType: string) => boolean;
};

interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any;
};

type NearleySymbol = string | { literal: any } | { test: (token: any) => boolean };

interface Grammar {
  Lexer: NearleyLexer | undefined;
  ParserRules: NearleyRule[];
  ParserStart: string;
};

const grammar: Grammar = {
  Lexer: lexer,
  ParserRules: [
    {"name": "statements$ebnf$1", "symbols": []},
    {"name": "statements$ebnf$1$subexpression$1", "symbols": ["__lb_", "statement"]},
    {"name": "statements$ebnf$1", "symbols": ["statements$ebnf$1", "statements$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "statements", "symbols": ["_ml", "statement", "statements$ebnf$1", "_ml"], "postprocess": 
        (data) => {
        	const repeated = data[2];
        	const restStatements = repeated.map(chunks => chunks[1]);
        	return [data[1], ...restStatements];
        }
        		},
    {"name": "statement", "symbols": ["var_assign"], "postprocess": id},
    {"name": "statement", "symbols": ["fun_call"], "postprocess": id},
    {"name": "statement", "symbols": ["use"], "postprocess": id},
    {"name": "statement", "symbols": [(lexer.has("comment") ? {type: "comment"} : comment)], "postprocess": id},
    {"name": "var_assign", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), "_", (lexer.has("assign") ? {type: "assign"} : assign), "_", "expr"], "postprocess": 
        (data) => {
        	return {
        		type: "var_assign",
        		var_name: data[0],
        		var_value: data[4]
        	}
        }
        		},
    {"name": "fun_call$ebnf$1$subexpression$1", "symbols": ["arg_list", "_ml"]},
    {"name": "fun_call$ebnf$1", "symbols": ["fun_call$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "fun_call$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "fun_call", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), "_", (lexer.has("lparen") ? {type: "lparen"} : lparen), "_ml", "fun_call$ebnf$1", (lexer.has("rparen") ? {type: "rparen"} : rparen)], "postprocess": 
        (data) => {
        	return {
        		type: "fun_call",
        		fun_name: data[0],
        		arguments: data[4] ? data[4][0]: []
        	}
        }
        		},
    {"name": "arg_list", "symbols": ["expr"], "postprocess": 
        (data) => {
        	return [data[0]];
        }
        		},
    {"name": "arg_list", "symbols": ["arg_list", (lexer.has("comma") ? {type: "comma"} : comma), "__ml", "expr"], "postprocess": 
        (data) => {
        	return [...data[0], data[2]];
        }
        		},
    {"name": "expr", "symbols": [(lexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "expr", "symbols": [(lexer.has("int") ? {type: "int"} : int)], "postprocess": id},
    {"name": "expr", "symbols": [(lexer.has("float") ? {type: "float"} : float)], "postprocess": id},
    {"name": "expr", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": id},
    {"name": "expr", "symbols": [(lexer.has("boolean") ? {type: "boolean"} : boolean)], "postprocess": id},
    {"name": "expr", "symbols": ["fun_call"], "postprocess": id},
    {"name": "expr", "symbols": ["array"], "postprocess": id},
    {"name": "expr", "symbols": ["lambda"], "postprocess": id},
    {"name": "array$ebnf$1$subexpression$1", "symbols": ["arg_list", "_ml"]},
    {"name": "array$ebnf$1", "symbols": ["array$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "array$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "array", "symbols": [(lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "_ml", "array$ebnf$1", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket)], "postprocess": 
        (data) => {
        	return {
        		type: "arrays",
        		arguments: data[2] ? data[2][0]: []
        	}
        }
        		},
    {"name": "use", "symbols": [{"literal":"use"}, "_", {"literal":":"}, "_", (lexer.has("string") ? {type: "string"} : string), "_"], "postprocess": 
        (data) => {
        	return {
        		"type": "use",
        		"module": data[4]
        	}
        }
        	},
    {"name": "lambda$ebnf$1$subexpression$1", "symbols": ["param_list", "_"]},
    {"name": "lambda$ebnf$1", "symbols": ["lambda$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "lambda$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "lambda", "symbols": [(lexer.has("lparen") ? {type: "lparen"} : lparen), "_", "lambda$ebnf$1", "_", (lexer.has("rparen") ? {type: "rparen"} : rparen), "_ml", (lexer.has("longarrow") ? {type: "longarrow"} : longarrow), "_", "lambda_body"], "postprocess": 
        (data) => {
        	return {
        		type: "lambda",
        		parameters: data[2] ? data[2][0] : [],
        		body: data[8]
        	}
        }
        	},
    {"name": "param_list$ebnf$1", "symbols": []},
    {"name": "param_list$ebnf$1$subexpression$1", "symbols": ["_", (lexer.has("comma") ? {type: "comma"} : comma), "_", (lexer.has("identifier") ? {type: "identifier"} : identifier)]},
    {"name": "param_list$ebnf$1", "symbols": ["param_list$ebnf$1", "param_list$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "param_list", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), "param_list$ebnf$1"], "postprocess": 
        (data) => {
        	const rpieces = data[1];
        	const params = rpieces.map(piece => piece[1]);
        	return [data[0], ...params];
        }
        		},
    {"name": "lambda_body", "symbols": ["expr"], "postprocess": 
        (data) => {
        	return [data[0]];
        }
        		},
    {"name": "lambda_body", "symbols": [(lexer.has("lbrace") ? {type: "lbrace"} : lbrace), "__lb_", "statements", "_", (lexer.has("rbrace") ? {type: "rbrace"} : rbrace)], "postprocess": 
        (data) => {
        	return data[3]
        }
        		},
    {"name": "__lb_$ebnf$1$subexpression$1", "symbols": ["_", (lexer.has("newline") ? {type: "newline"} : newline)]},
    {"name": "__lb_$ebnf$1", "symbols": ["__lb_$ebnf$1$subexpression$1"]},
    {"name": "__lb_$ebnf$1$subexpression$2", "symbols": ["_", (lexer.has("newline") ? {type: "newline"} : newline)]},
    {"name": "__lb_$ebnf$1", "symbols": ["__lb_$ebnf$1", "__lb_$ebnf$1$subexpression$2"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "__lb_", "symbols": ["__lb_$ebnf$1", "_"]},
    {"name": "_ml$ebnf$1", "symbols": []},
    {"name": "_ml$ebnf$1$subexpression$1", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)]},
    {"name": "_ml$ebnf$1$subexpression$1", "symbols": [(lexer.has("newline") ? {type: "newline"} : newline)]},
    {"name": "_ml$ebnf$1", "symbols": ["_ml$ebnf$1", "_ml$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "_ml", "symbols": ["_ml$ebnf$1"]},
    {"name": "__ml$ebnf$1$subexpression$1", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)]},
    {"name": "__ml$ebnf$1$subexpression$1", "symbols": [(lexer.has("newline") ? {type: "newline"} : newline)]},
    {"name": "__ml$ebnf$1", "symbols": ["__ml$ebnf$1$subexpression$1"]},
    {"name": "__ml$ebnf$1$subexpression$2", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)]},
    {"name": "__ml$ebnf$1$subexpression$2", "symbols": [(lexer.has("newline") ? {type: "newline"} : newline)]},
    {"name": "__ml$ebnf$1", "symbols": ["__ml$ebnf$1", "__ml$ebnf$1$subexpression$2"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "__ml", "symbols": ["__ml$ebnf$1"]},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "__$ebnf$1", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "__", "symbols": ["__$ebnf$1"]}
  ],
  ParserStart: "statements",
};

export default grammar;
