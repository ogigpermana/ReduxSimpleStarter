import React, {Component}  from 'react';

class SearchBar extends Component{
	constructor(props){
			super(props);

			this.state = { term: '' };
	}

	render(){
		return (
			<div className="top-search">
            <form className="navbar-form navbar-right">
			<input
				className="form-control"
				value={this.state.term} 
				onChange={event => this.onInputChange(event.target.value)} />
            </form>
          </div>
		);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;