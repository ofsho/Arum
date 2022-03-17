// This script combines all of the modules into one function

// Scripts combined:
// - lexer.ts
// - parser.ts
// - runtime.ts
import { runtime } from './runtime';
import { parse } from './parser';

export function run(file: string): void {
	const ast = parse(file);
	console.log(JSON.stringify(ast))
	main(ast, false, null);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function main(ast, isCompile: boolean, _output: string) {
	if (!ast) {
		throw new Error('Please specify the file');
	}

	// We expect the AST to already be an object/array, we run generate to generate the JS code
	let jsCode = null;
	if (isCompile == true) {
		jsCode = generate(ast);
		/*console.log("JSCode:", jsCode)
        const b64 = Buffer.from(jsCode).toString("base64");
        await fs.writeFileSync(output, b64);
        await fs.writeFileSync(output, atb64(jsCode));*/
	} else {
		//console.log(isCompile, output);

		// Put a main() function to screw over people when they dont have a main() function

		jsCode = `${runtime}\n\n\n\n\n\n\n\n\n\n\n` + generate(ast) + "\nmain();";
		eval(jsCode);
	}

	//await fs.writeFileSync("log/out.log", jsCode)
	return 0;
}

function generate(statements): string {
	// Array for storing the statements
	const lines: string[] = [];

	// For loop to iterate through the statements
	try {
		for (const statement of statements[0]) {
			// Generate the JS code for the statement, then push to lines[]
			lines.push(generateStatement(statement));
		}
	} catch (e) {
		for (const statement of statements) {
			// Generate the JS code for the statement, then push to lines[]
			lines.push(generateStatement(statement));
		}
	}

	// Returns all lines, with a \n between each line
	return lines.join('\n');
}

function generateStatement(node): string {
	// If/else statement to determine which type of statement we are dealing with
	if (node.type === 'var_assign') {
		const state = generateStatement(node.var_value);
		const js = `${node.var_name.value} = ${state};`;
		return js;
	} else if (node.type === 'fun_call') {
		let funName = node.fun_name.value;
		if (funName === 'if') {
			funName = '$if';
		} else if (funName === 'while') {
			funName = '$while';
		}
		const argList = node.arguments
			.map((arg) => {
				return generateStatement(arg);
			})
			.join(', ');
		return `${funName}(${argList})`;
	} else if (node.type === 'string') {
		return node.value;
	} else if (node.type === 'number') {
		return node.value;
	} else if (node.type === 'identifier') {
		return node.value;
	} else if (node.type === 'lambda') {
		const paramList = node.parameters.map((param) => param.value).join(', ');

		const jsBody = node.body
			.map((arg, i) => {
				const jsCode = generateStatement(arg);
				if (i === node.body.length - 1) {
					return 'return ' + jsCode;
				} else {
					return jsCode;
				}
			})
			.join(';\n');
		return `function (${paramList}){\n${jsBody}\n}`;
	} else if (node.type === 'arrays') {
		const arrayified = node.arguments.map((arg) => arg).join(', ');
		if (node.arguments.length > 0) return '[' + arrayified + ']';
		return '[]';
	} else if (node.type === 'use') {
		// const dir = node.module.value.replace(/["]+/g, '');
		// const file = fs.readFileSync(dir, "utf8");
		// const module = Buffer.from(file, 'base64').toString('ascii');
		// console.log("Module: " + module)
		// eval(runtime + b64ta(file));
		// return node.module;
	} else if (node.type === 'comment') {
		return '';
	} else {
		throw new Error('Unknown statement type: ' + node.type);
	}
}
