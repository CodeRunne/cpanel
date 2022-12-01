import axios from 'axios';
import ServicesActionTypes from './services.types';
import { getServicesApi, filterServicesByCategoryApi } from '../../config';

export const fetchAllServicesSuccess = services => ({
	type: ServicesActionTypes.FETCH_SERVICES_SUCCESS,
	payload: services
});

export const fetchAllServicesFailed = errorMessage => ({
	type: ServicesActionTypes.FETCH_SERVICES_FAILED,
	payload: errorMessage
});

export const filterServicesByCategory = category => ({
	type: ServicesActionTypes.FILTER_SERVICES_BY_CATEGORY,
	payload: category
});

export const fetchServices = () => {
	return dispatch => {
		const fetchServices = axios.get(`${getServicesApi}`);

		// Await response
		fetchServices
			.then(({ data }) => {
				dispatch(fetchAllServicesSuccess(data))
			})
			.catch(error => {
				dispatch(fetchAllServicesFailed('There was an error fetching our services'))
			})
	}
};


export const filterServices = category => {
	return dispatch => {
		const postServiceCategory = axios.post(`${filterServicesByCategoryApi(category)}`);

		postServiceCategory
			.then(({ data }) => dispatch(filterServicesByCategory(data)));
	}
}