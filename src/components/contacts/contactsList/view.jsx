import React from 'react';
import { Table } from 'antd';
import {getDataFromResults, getColumnOptions} from '../utils'
import './style.scss';
import {TiledView} from './tiledView';
import {Loader} from '../../app/loader';

const View = ({usersList, contactsView, isLoading}) => {
	const users = getDataFromResults(usersList);
	const columns = getColumnOptions();

	const table = (
		<div className="table-view">
			<Table
				columns={columns}
				dataSource={users}
				style={{minWidth: 1200}}
				scroll={{ x: 'calc(700px + 50%)' }}
			/>
		</div>
	);

	const tiled = (
		<div className="tiled-view">
			<TiledView users={users} count={users.length}/>
		</div>
	);

	const getView = () => {
		if (contactsView === 'tiled') {
			return tiled
		}
		return  table
	};

	return (
		<div className="contacts__list">
			{isLoading
				? <Loader />
				: getView()
			}

			{/*{contactsView === 'tabular'*/}
			{/*	? table*/}
			{/*	: tiled*/}
			{/*}*/}
		</div>
	);
};




export { View };
