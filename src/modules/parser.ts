import { Parser, Grammar } from 'nearley';
import grammar from './grammar/arum';

const parser = new Parser(Grammar.fromCompiled(grammar));

export function parse(file) {
	if (!file) {
		throw new Error('Please specify a file');
	}
	parser.feed(file);
	//fs.writeFileSync('./log/ast.log', JSON.stringify(parser.results, null, 2));
	return parser.results;
}
