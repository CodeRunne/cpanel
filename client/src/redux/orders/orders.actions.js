import axios from 'axios';
import OrdersActionTypes from './orders.types';
import { addNewOrdersApi, getAllOrdersApi, filterOrdersByStatusApi } from '../../config';

const addNewOrderPending = () => ({
	type: OrdersActionTypes.ADD_NEW_ORDER_PENDING
}); 

const addNewOrderSuccess = orders => ({
	type: OrdersActionTypes.ADD_NEW_ORDER_SUCCESS,
	payload: orders
}); 

const addNewOrderFailed = error => ({
	type: OrdersActionTypes.ADD_NEW_ORDER_FAILED,
	payload: error
}); 

// Fetch all orders
const fetchAllOrdersSuccess = orders => ({
	type: OrdersActionTypes.FETCH_ALL_ORDERS_SUCCESS,
	payload: orders
});

const fetchAllOrdersPending = () => ({
	type: OrdersActionTypes.FETCH_ALL_ORDERS_PENDING
});

export const filterOrdersByStatus = orders => ({
	type: OrdersActionTypes.FILTER_ORDERS_BY_STATUS,
	payload: orders
});


// Requests
export const addNewOrder = orders => {
	return dispatch => {
		// Dispatch Add Order Pending State
		dispatch(addNewOrderPending());

		// Post Request
		const addOrder =  axios.post(addNewOrdersApi, orders);

		// Await Request
		addOrder.then(({ data }) => {
			if(data.status === "success")
				dispatch(addNewOrderSuccess(data.data));
		}).catch(error => {
			dispatch(addNewOrderFailed('There was an error adding order'));
		});
	}
}

// Fetch all orders
export const fetchAllOrders = id => {
	return dispatch => {
		dispatch(fetchAllOrdersPending());

		const userID = id;

		axios.get(`${getAllOrdersApi}`, userID).then(({ data }) => {
			if(data.status === "success")
				dispatch(fetchAllOrdersSuccess(data.data));
		});
	}
};

// Filter orders
export const filterOrders = status => {
	return dispatch => {
		const postServiceCategory = axios.post(`${filterOrdersByStatusApi(status)}`);

		postServiceCategory
			.then(({ data }) => console.log(data));
		// dispatch(filterOrdersByStatus(data))
	}
}