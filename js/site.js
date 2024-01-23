// creating the getValue
function getValue() {
	let inputMessage = document.getElementById('message').value;

	if (inputMessage.length < 2) {
		Swal.fire({
			icon: 'error',
			backdrop: false,
			title: 'Flip-it-Up',
			text: 'Please, enter at least 2 characters',
		})

		// This line is called early return
		return
	}

	let reversed = reverseString(inputMessage);
	displayMessage(reversed);
}

// using string for simplicity
// the function that will reverse our string.
function reverseString(inputString) {
	// You can treat a string just like an array
	let result = '';

	// decrementing for loop
	for (let index = inputString.length - 1; index >= 0; index--) {
		result += inputString[index];
	}

	// return the string
	return result;
}

// display the reverse string on the page
function displayMessage(reverseString) {
	// put our message in the HTML
	document.getElementById(
		'result'
	).innerHTML = `Your reversed message is: ${reverseString}`;

	let alert = document.getElementById('alert');
	alert.classList.remove('invisible');
}




/*** 

// Using Array instead
function reverseStringB(inputString) {
	// turn the string into an array
	let characters = inputString.split('')
	let result = []

	// decrementing for loop
	// loop through the array of characters from the end towards the beginning
	for (let index = characters.length - 1; index >= 0; index--) {
		let letter = characters[index]
		// put the letter into an array
		result.push(letter)
	}

	// turn the new array back into a string
	let newResultString = result.join('')

	// return the string
	return newResultString
}


function displayMessageB(reverseString) {
	// put our message in the HTML
	document.getElementById(
		'result'
	).innerHTML = `Your reversed message is: ${reverseString}`

	let alert = document.getElementById('alert')
	alert.classList.remove('invisible')
}


// Using Objects
function getValueC() {
	let inputMessage = document.getElementById('message').value

	if (inputMessage < 2) {
		Swal.fire({
			icon: 'errow',
			backdrop: false,
			title: 'Flip-it-Up',
			text: 'Please, enter at least 2 characters',
		})

		// This line is called early return
		return
	}

	let reversed = reverseString(inputMessage)

	let stringObject = {
		// input property
		input: inputMessage,
		// reverseString property
		reverseString: reversed
	}

	displayMessage(stringObject)
}

function reverseStringC(inputString) {
	// You can treat a string just like an array
	let result = ''

	// decrementing for loop
	for (let index = inputString.length - 1; index >= 0; index--) {
		result += inputString[index]
	}

	// return the string
	return result
}

function displayMessageC(stringObject) {
	// put our message in the HTML
	document.getElementById(
		'result'
	).innerHTML = `You entered: ${stringObject.input}. Your reversed message is: ${stringObject.reversedInput}`

	let alert = document.getElementById('alert')
	alert.classList.remove('invisible')
}

***/

// function reversedInput(stringToReverse) {
// 	let newString = ''

// 	for (let index = stringToReverse.length -1; index >= 0; index--) {
// 		newString += stringToReverse[index]
// 	}

// 	return newString
// }

// reversedInput('hello yayad')