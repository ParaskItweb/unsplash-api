import React from 'react';

const ImageDetail = (props) => {
	console.log(props.newImageUrl);
	return (
		<div>
			<h1>Image Display Block</h1>
			<div>
				<img alt={'dummy'} src={props.newImageUrl} />
			</div>
		</div>
	);
};

export default ImageDetail;
