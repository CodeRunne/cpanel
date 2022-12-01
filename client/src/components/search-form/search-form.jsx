import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { connect } from 'react-redux';
import { filterServices } from '../../redux/services/services.actions';
import FormInput from '../form-input/form-input';
import { SearchFormContainer } from './search-form.styles';

function SearchForm({ filterServices }) {
	const [categorySearch, setCategorySearch] = useState('');
	const [error, setError] = useState({});

	function filterCategory(e) {
		if(e.which === 13 || e.keyCode === 13) {
			if(categorySearch) {
				filterServices(categorySearch);
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
	filterServices: category => dispatch(filterServices(category))
});

export default connect(null, mapDispatchToProps)(SearchForm)