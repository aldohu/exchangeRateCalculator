const currencyOneElement = document.getElementById('currency-one');
const currencyTwoElement = document.getElementById('currency-two');

// Get the amount one and amount two elements
const amountOneElement = document.getElementById('amount-one');
const amountTwoElement = document.getElementById('amount-two');

// Get the selected values and input values
const amountOne = amountOneElement.value;

// Log the retrieved values
console.log('Currency One:', currencyOneElement.value);
console.log('Currency Two:', currencyTwoElement.value);
console.log('Amount One:', amountOne);
console.log('Amount Two:', amountTwoElement.value);

const fetchData = async () => {
	const currencyOne = currencyOneElement.value;
	const currencyTwo = currencyTwoElement.value;
	const url = `https://v6.exchangerate-api.com/v6/535a3cf4e4f4104e0e48fbc3/latest/${currencyOne}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		// Process the data here

		// Get the exchange rate
		const rate = data.conversion_rates[currencyTwo];
		amountTwoElement.value = (amountOne * rate).toFixed(2);
	} catch (error) {
		// Handle any errors
		console.error('Error:', error);
	}
};

// Call the async function with the initial currency values
fetchData();

// Add event listeners to currency elements
currencyOneElement.addEventListener('change', fetchData);
currencyTwoElement.addEventListener('change', fetchData);
