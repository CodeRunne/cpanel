import React, { useState, useContext } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { AuthContext } from '../../providers/auth-provider/auth-provider';
import { searchServices } from '../../redux/services/services.actions';
import { selectServices } from '../../redux/services/services.selectors';
import { filterOrders } from '../../redux/orders/orders.actions';
import FormInput from '../form-input/form-input';
import { SearchFormContainer } from './search-form.styles';

function SearchForm({ allServices, searchServices, filterOrders, type }) {
	const { currentUser } = useContext(AuthContext);
	const userID = currentUser?.id ?? '';
	const [query, setQuery] = useState('');
	const [error, setError] = useState({});

	function SearchOption(type, query) {
		if(type === "orders") return filterOrders(query.toLowerCase(), userID);

		return searchServices(query.toLowerCase());
	}

	function searchQuery(e) {
		if(e.which === 13 || e.keyCode === 13) {
			if(query) {
				// const servicesQueryIDs = getFilteredServicesID(query.toLowerCase(), allServices);
				// console.log(servicesQueryIDs);

				SearchOption(type, query);
				
				setError({ ...error, query: '' })
			} else {
				setError({ ...error, query: 'Add a category' })
			}
		}
	}

	return (
		<SearchFormContainer 
			className="d-flex search__form" 
			style={{ width: '100%' }} 
			onSubmit={e => e.preventDefault()}
			noValidate
		>
			<FormInput 
	        type="search"
	        name="category-search"
	        placeholder="Search"
	        value={query}
	        handleChange={({ target }) => setQuery(target.value)}
	        onKeyDown={searchQuery}
	        error={error?.query}
	       />
	       
	       {error.query ? <AiOutlineSearch style={{ top: '35%'}} /> : <AiOutlineSearch />}		
	    </SearchFormContainer>
	)
}

const mapDispatchToProps = dispatch => ({
	searchServices: service => dispatch(searchServices(service)),
	filterOrders: (category, userID) => dispatch(filterOrders(category, userID))
});

const mapStateToProps = createStructuredSelector({
	allServices: selectServices 
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)