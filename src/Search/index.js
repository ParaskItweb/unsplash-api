import React from 'react';

const Search = (props) => {
	let searchValue = '';
	const getSearchValue = (e) => {
		searchValue = e.target.value;
	};
	return (
		<div>
			<input onChange={getSearchValue} />
			<button onClick={() => props.onSearch(searchValue)}>Serach</button>
		</div>
	);
};
export default Search;
