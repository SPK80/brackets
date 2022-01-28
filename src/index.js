function isOpening(bracket, bracketsGroup, stack, index) {
	if (isUnary(bracketsGroup))
		return (stack.length == 0 || stack[stack.length - 1] != index);
	else
		return bracket == bracketsGroup[0];
}

function bracketsIndex(bracket, bracketsConfig) {
	return bracketsConfig.findIndex(bc => (bc[0] === bracket || bc[1] === bracket))
}

function isUnary(bracketsGroup) {
	return bracketsGroup[0] === bracketsGroup[1];
}

module.exports = function check(str, bracketsConfig) {
	const stack = [];
	const result = [...str].find(bracket => {
		const index = bracketsIndex(bracket, bracketsConfig);
		if (isOpening(bracket, bracketsConfig[index], stack, index)) {
			stack.push(index);
			return false;
		}
		else
			return (index !== stack.pop());
	});
	if (stack.length != 0) return false;
	return !result;
}