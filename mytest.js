const check = require('./src/index.js');
const config2 = [['(', ')'], ['[', ']']];
const config4 = [['|', '|']];

console.log(check(
	'||', config4
));

// console.log(check('((()))()', [['(', ')']]));