import React from 'react';
import Image from '../Image/';

const ImageList = (props) => {
	const setImageUrl = (props1) => {
		props.getImageUrl(props1);
	};

	const myImage = (img) => {
		return <Image key={img.id} url={img.urls.small} imageId={img.id} setImageUrl={setImageUrl} />;
	};
	return <div>{props.images.map(myImage)}</div>;
};
export default ImageList;
