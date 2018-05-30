import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBTGBU5RKjbMggC1nPspGpCqz4NE-jQMbI';

class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'Tutorial Vue JS Pemula'}, (videos) => {
			this.setState({ videos });
		});
	}
	render(){
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
