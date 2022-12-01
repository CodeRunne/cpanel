function NewOrderValidation({ category, services, link, averageTime, quantity, charge }) {
	const errors = {};

	if(!category.length)
		errors.categories = "Please select a category you would like to order";

	if(!services.length)
		errors.services = "Please select a service you would like to order";

	if(!services.includes(category))
		errors.services = "Select a services based on the selected category";

	if(!(/^@[a-zA-Z]{3,}$/ig).exec(link)) 
		errors.link = "Please add a valid telegram account";
	
	if(quantity < 500 || quantity > 28000)
		errors.quantity = "Quantity can't be less than 500 or greater than 28000";

	if(!(/^[\d]{0,}\shour(s)?(\s[\d]{1,}\sminute(s)?)?$/ig).exec(averageTime))
		errors.averageTime = "Error";


	if(!charge.length)
		errors.charge = "Charge can't be empty";

	return errors;
}

export default NewOrderValidation;