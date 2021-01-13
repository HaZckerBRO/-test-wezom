import React, { useState } from 'react';
import {Input, Select, Row, Col} from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import './style.scss';


const { Search } = Input;
const { Option } = Select;

export const defaultUsersFilterValues = {name: '', gender: 0, country: 0};

const View = ({filterUsers, countries, isLoading}) => {
	const [filter, setFilter] = useState(defaultUsersFilterValues);

	function genderChangeHandler(key, val) {
		const newFilterState = {
			...filter,
			[key]: val
		};
		setFilter(newFilterState);
		filterUsers(newFilterState);
	}

	function clearFilter() {
		setFilter(defaultUsersFilterValues);
		filterUsers(defaultUsersFilterValues);
	}

	return (
		<div className="search">
			<Row className="search__box">
				<Col span={10}>
					<Search
						placeholder="Search by full name"
						enterButton
						size="large"
						value={filter.name}
						onChange={(e) => genderChangeHandler('name', e.target.value)}
						disabled={isLoading}
					/>
				</Col>
				<Col span={4}>
					<Select
						style={{ width: '100%' }}
						onChange={(value) => genderChangeHandler('gender', value)}
						size="large"
						value={filter.gender}
						defaultValue={0}
						disabled={isLoading}
					>
						<Option value={0}>All gender</Option>
						<Option value="male">Male</Option>
						<Option value="female">Female</Option>
						<Option value="indeterminate">Indeterminate</Option>
					</Select>
				</Col>
				<Col span={4}>
					<Select
						style={{ width: '100%' }}
						onChange={(value) => genderChangeHandler('country', value)}
						size="large"
						value={filter.country}
						defaultValue={0}
						disabled={isLoading}
					>
						<Option value={0}>All countries</Option>
						{countries && countries.map(country => (
							<Option key={country} value={country.toLowerCase()}>{country}</Option>
						))}
					</Select>
				</Col>
				<Col className="search__clear" onClick={clearFilter}>
					<CloseOutlined />
					<span>Clear</span>
				</Col>
			</Row>
		</div>
	);
};




export { View };
