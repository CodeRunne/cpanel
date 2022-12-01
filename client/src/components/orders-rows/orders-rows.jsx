import React from 'react';
import PropTypes from 'prop-types';

function OrdersRow({ id, category, services, link, averageTime, quantity, charge,  status }) {
	return (
		<tr>
	        <td>{id}</td>
	        <td>{category}</td>
	        <td>{services}</td>
	        <td>{status}</td>
	        <td>{link}</td>
	        <td>{averageTime}</td>
	        <td>{quantity}</td>
	        <td>{charge}</td>
	    </tr>
	)
}

OrdersRow.propTypes = {
	id: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	services: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	averageTime: PropTypes.string.isRequired,
	charge: PropTypes.string.isRequired
}

export default OrdersRow