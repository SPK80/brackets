function isOpeningBinary(bracket, bracketsGroup) {
	return bracket == bracketsGroup[0];
}

function bracketsIndex(bracket, bracketsConfig) {
	return bracketsConfig.findIndex(bc => (bc[0] === bracket || bc[1] === bracket))
}

function isUnary(bracketsGroup) {
	return bracketsGroup[0] === bracketsGroup[1];
}

function isOpeningUnary(stack, groupIndex) {
	return (stack.length == 0 || stack[stack.length - 1] != groupIndex);
}

module.exports = function check(str, bracketsConfig) {
	const stack = [];

	const notCorrect = [...str].find(bracket => {
		const groupIndex = bracketsIndex(bracket, bracketsConfig);
		const bracketsGroup = bracketsConfig[groupIndex];

		let isOpeningBracket;
		if (isUnary(bracketsGroup)) isOpeningBracket = isOpeningUnary(stack, groupIndex)
		else isOpeningBracket = isOpeningBinary(bracket, bracketsGroup);

		if (isOpeningBracket) {
			stack.push(groupIndex);
			return false;
		}
		else
			return (groupIndex !== stack.pop());

	});

	return stack.length == 0 && !notCorrect;
}