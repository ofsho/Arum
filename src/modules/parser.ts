import { Parser, Grammar } from 'nearley';
import grammar from './grammar/arum';

const parser = new Parser(Grammar.fromCompiled(grammar));

export function parse(file) {
	if (!file) {
		throw new Error('Error: Please specify text to parse.');
	}
	console.log(file)
	parser.feed(file);
	//fs.writeFileSync('./log/ast.log', JSON.stringify(parser.results, null, 2));
	return parser.results;
}
