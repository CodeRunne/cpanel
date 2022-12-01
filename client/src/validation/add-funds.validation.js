function AddFundsValidation({ paymentMethod, amount }) {
    const errors = {};

    if(!amount.length) 
        errors.amount = "Add an amount to pay";
    else if(amount <= 0) 
        errors.amount = "Amount can't be less than 5$";
    
    return errors;
}

export default AddFundsValidation;