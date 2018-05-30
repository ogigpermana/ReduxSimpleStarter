import React, {Component}  from 'react';

class SearchBar extends Component{
	constructor(props){
			super(props);

			this.state = { term: '' };
	}

	render(){
		return (
		<div>
			<input onChange={event => this.setState({ term: event.target.value })} />
			// <br />
			// Nilai dari inputan: {this.state.term} <- menampilkan inputan
		</div>
		);
	}
}

export default SearchBar;
