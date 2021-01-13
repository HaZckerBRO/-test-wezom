import React from 'react';
import './style.scss';
import {Button} from 'antd';
import { ReloadOutlined, AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';


const View = ({contactsView, isLoading, setContactsView, requestUsers}) => {
	const buttonStyle = {fontSize: 16};

	const getButtonClassName = (view) => {
		return contactsView === view ? 'button active' : 'button'
	};

	const viewBtnClickHandler = (e) => {
		const view = e.target.closest(`[data-view]`).dataset.view;
		setContactsView(view)
	};

	const updateBtnClickHandler = () => {
		if (!isLoading) {
			requestUsers()
		}
	};

	return (
		<div className="contacts__settings">
			<Button className="button" onClick={updateBtnClickHandler} disabled={isLoading}>
				<ReloadOutlined style={buttonStyle} />
			</Button>
			<span
				className={getButtonClassName('tiled')}
				onClick={viewBtnClickHandler}
				data-view='tiled'
			>
				<AppstoreOutlined style={buttonStyle}/>
			</span>
			<span
				className={getButtonClassName('tabular')}
				onClick={viewBtnClickHandler}
				data-view='tabular'
			>
				<UnorderedListOutlined style={buttonStyle}/>
			</span>
		</div>
	);
};




export { View };
