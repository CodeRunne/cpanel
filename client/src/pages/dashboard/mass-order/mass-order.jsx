import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../providers/auth-provider/auth-provider';
import MassOrderValidation from '../../../validation/mass-order.validation';
import { FormInput, Button } from '../../../components';
import { MassOrderContainer, MassOrderForm } from './mass-order.styles';


function MassOrder() {
	const { currentUser: { id }} = useContext(AuthContext); 
	const [order, setOrder] = useState("");
	const [error, setError] = useState("");
	const [formIsSubmitted, setFormIsSubmitted] = useState(false);

	function submitMassOrder(e) {
		e.preventDefault();

		if(order.includes('\n')) { 
			const formattedOrder = order.split('\n');
			setOrder(formattedOrder);
		}

		setError(MassOrderValidation({ order }));

		setFormIsSubmitted(true);
	}

	console.log(formIsSubmitted);

	useEffect(() => {
		if(Object.keys(error).length === 0 && formIsSubmitted) {
			// console.log("split orders");
			// console.log(order.split('|'));
		}
	}, [error, formIsSubmitted, order, id])

	return (
		<MassOrderContainer>
			<h5 className="heading-5" style={{ fontWeight: '500' }}>Mass Order</h5>

			<MassOrderForm 
				className="d-flex d-flex-column" 
				onSubmit={submitMassOrder}
				noValidate
			>
				<FormInput
					type="textarea"
					name="mass-order"
					label="One order per line in order"
					value={order}
					handleChange={({ target }) => setOrder(target.value)}
					placeholder="service_id | link | quantity"
					error={error?.order}
				/>

				<Button
					type="submit"
					variant="primary"
					style={{ width: '100%' }}
				>Submit</Button>
			</MassOrderForm>
		</MassOrderContainer>
	)
}

export default MassOrder