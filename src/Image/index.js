import React from 'react';
import './index.css';

const Image = (props) => {
	const getImageUrl = (url) => {
		props.setImageUrl(url);
	};
	return (
		<div className='imagestyle'>
			<img src={props.url} title='Image' alt={'Title'} onClick={() => getImageUrl(props.url)} />
		</div>
	);
};
export default Image;
