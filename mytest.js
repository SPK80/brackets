const check = require('./src/index.js');
const config2 = [['(', ')'], ['[', ']']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];

console.log(check(
	'|()|(||)||', config5
));

// console.log(check('((()))()', [['(', ')']]));