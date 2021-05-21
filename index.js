function shadowizard(argument) {
	let images = document.querySelectorAll('.shadowizard');

	if (argument.shadow_type === 'hard') {
		argument.shadow_type = '0px';
	} else {
		argument.shadow_type = '15px';
	}

	images.forEach(image => {
		image.style.boxShadow = `10px 10px ${argument.shadow_type} 1px rgba(0,0,0,12)`;

		if (argument.padding) {
			image.style.padding = '1em';
		}
	})
}

module.exports.shadowizard = shadowizard;