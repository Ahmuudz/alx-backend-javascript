function returnHowManyArguments(...args) {
	let returnHowManyArguments = 0;
	for (let arg of args) returnHowManyArguments += 1;
	return returnHowManyArguments;
}
