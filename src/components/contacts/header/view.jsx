import React from 'react';
import { Typography } from 'antd';
import './style.scss';
import { ViewSettings } from '../viewSettings';

const { Title } = Typography;

const View = (props) => {
	return (
		<div className="contacts__header">
			<Title>Contacts</Title>
			<ViewSettings />
		</div>
	);
};




export { View };
