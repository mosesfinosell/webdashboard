import React from 'react';
export const URL_COLUMNS = [
	{
		baseurl: 'https://finosell.link/api/v2/',
		title: 'Order',
		width: '10%',
		type: 'string',
	},
	{ name: 'orderType', title: 'Type', width: '10%', type: 'string' },
];

class URLControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			URLColumns: URL_COLUMNS,
		};
	}
}

export default URLControl;
