import React from 'react';
import Spin from 'antd/es/spin';
import './style.scss'

export const Loader = ({size}) => {
	return (
		<div className="Loader">
			<Spin size={size || 'large'} />
		</div>
	)
};
