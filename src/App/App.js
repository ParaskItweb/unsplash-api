import React from 'react';
import Axios from 'axios';
import Search from '../Search/';
import ImageList from '../ImageList/';
import ImageDetail from '../ImageDetail/';
import '../Image/index.css';

class App extends React.Component {
	state = { finalImage: [], imageUrl: '' };
	//process.env.REACT_APP_API_KEY;
	onSearch = async (query) => {
		const res = await Axios(
			`https://api.unsplash.com/search/photos/?query=${query}&client_id=fc58b2fb35c27dd97bd9efdf0d8ff1756738eafc9eb0b4025c12e79b956071c1`
		);
		const resImages = res.data.results;
		//console.log(resImages);

		this.setState({ finalImage: resImages });
	};
	getImageUrl = (imageUrl) => {
		this.setState({ imageUrl });
	};
	render () {
		const { finalImage, imageUrl } = this.state;
		return (
			<div className='align-center'>
				<Search onSearch={this.onSearch} />
				{imageUrl !== '' && <ImageDetail newImageUrl={this.state.imageUrl} />}
				<ImageList images={finalImage} getImageUrl={this.getImageUrl} />
			</div>
		);
	}
}
export default App;
