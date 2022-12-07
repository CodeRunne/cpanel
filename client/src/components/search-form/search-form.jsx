import React, { useState, useContext } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { connect } from 'react-redux';
import { AuthContext } from '../../providers/auth-provider/auth-provider';
import { filterServices } from '../../redux/services/services.actions';
import { filterOrders } from '../../redux/orders/orders.actions';
import FormInput from '../form-input/form-input';
import { SearchFormContainer } from './search-form.styles';

function SearchForm({ filterServices, filterOrders, type }) {
	const { currentUser } = useContext(AuthContext);
	const userID = currentUser?.id ?? '';
	const [categorySearch, setCategorySearch] = useState('');
	const [error, setError] = useState({});

	function filterSearchOption(type, category) {
		if(type === "orders") return filterOrders(category, userID);

		return filterServices(category);
	}

	function filterCategory(e) {
		if(e.which === 13 || e.keyCode === 13) {
			if(categorySearch) {
				filterSearchOption(type, categorySearch);
				setError({ ...error, categorySearch: '' })
			} else {
				setError({ ...error, categorySearch: 'Add a category' })
			}
		}
	}

	return (
		<SearchFormContainer className="d-flex search__form" style={{ width: '100%' }} onSubmit={e => e.preventDefault()}>
			<FormInput 
	        type="search"
	        name="category-search"
	        placeholder="Search"
	        value={categorySearch}
	        handleChange={({ target }) => setCategorySearch(target.value)}
	        onKeyDown={filterCategory}
	        error={error?.categorySearch}
	       />
	       
	       {error.categorySearch ? <AiOutlineSearch style={{ top: '35%'}} /> : <AiOutlineSearch />}		
	    </SearchFormContainer>
	)
}

const mapDispatchToProps = dispatch => ({
	filterServices: category => dispatch(filterServices(category)),
	filterOrders: (category, userID) => dispatch(filterOrders(category, userID))
});

export default connect(null, mapDispatchToProps)(SearchForm)