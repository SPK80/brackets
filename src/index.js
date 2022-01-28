function isOpening(bracket, bracketsGroup) {
	return bracket == bracketsGroup[0]
}

function bracketsIndex(bracket, bracketsConfig) {
	return bracketsConfig.findIndex(bc => (bc[0] === bracket || bc[1] === bracket))
}

module.exports = function check(str, bracketsConfig) {
	const stack = [];
	const result = [...str].find(bracket => {
		const index = bracketsIndex(bracket, bracketsConfig);
		if (isOpening(bracket, bracketsConfig[index])) {
			stack.push(index);
			return false;
		}
		else
			return (index !== stack.pop());
	});
	if (stack.length != 0) return false;
	return !result;
}