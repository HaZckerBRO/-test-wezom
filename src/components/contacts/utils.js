import {Tag} from 'antd';
import React from 'react';

const colors = {
	'New Zealand': 'coral',
	'Australia': 'purple',
	'United Kingdom': 'aqua',
	'Spain': 'pink',
	'Finland': 'gold',
	'Denmark': 'yellow',
	'Switzerland': 'silver',
	'Canada': 'green',
	'France': 'forestgreen',
	'Netherlands': 'lightSalmon',
	'Norway': 'brown',
	'Turkey': 'paleGreen',
	'Ireland': 'slateBlue',
	'Brazil': 'gray',
	'Germany': 'PaleTurquoise',
	'Iran': 'RebeccaPurple',
	'United States': 'dodgerblue',
};

export function getNationalityColor(nat) {
	let color = null;

	Object.keys(colors).forEach(country => {
		if (nat.toLowerCase() === country.toLowerCase()) {
			color = colors[country]
		}
	});

	return color ? color : 'blue';
}

export function sortByFullName(a, b) {
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}
	return 0;
}

export function copyToClipboard(e) {
	e.persist();
	const {dataset} = e.target;
	if (dataset.value) {
		navigator.clipboard.writeText(dataset.value)
			.then(() => {
				e.target.text = '✔ Copied';
				setTimeout(() => e.target.text = dataset.value, 1500)
			})
			.catch(err => {
				console.log('Something went wrong', err);
			});
	}
}

export function getDataFromResults(data) {
	return data.map(user => {
		const {name, dob: birthday, phone, email, gender, login, location, picture, nat} = user;
		return {
			key: login.uuid,
			thumbnail: picture.thumbnail,
			picture: picture.large,
			name: `${name.title}. ${name.first} ${name.last}`,
			birthday,
			phone,
			email,
			nationality: location.country,
			location,
			gender,
			nat
		}
	});
}

export function getColumnOptions() {
	return [
		{
			title: 'Avatar',
			dataIndex: 'thumbnail',
			width: 100,
			key: 'thumbnail',
			render: thumbnail => <img src={thumbnail} className="thumbnail"/>,
		},
		{
			title: 'Full Name',
			dataIndex: 'name',
			key: 'name',
			sorter: sortByFullName,
			render: name => <a>{name}</a>,
		},
		{
			title: 'Birthday',
			dataIndex: 'birthday',
			key: 'birthday',
			render: data => (
				<>
					<span>{new Date(data.date).toUTCString()}</span>
					<p>{data.age} years</p>
				</>
			)
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
			render: mail => <a onClick={copyToClipboard} data-value={mail}>{mail}</a>,
		},
		{
			title: 'Phone',
			dataIndex: 'phone',
			key: 'phone',
			render: phone => <a onClick={copyToClipboard} data-value={phone}>{phone}</a>,
		},
		{
			title: 'Location',
			dataIndex: 'location',
			key: 'location',
			render: location => (
				<>
					<b>/{location.country}/</b>
					<p>
						{location.street.number}&nbsp;
						{location.street.name},&nbsp;
						{location.city},&nbsp;
						{location.state}&nbsp;
						{location.postcode}
					</p>
				</>
			)
		},
		{
			title: 'Nationality',
			dataIndex: 'nationality',
			key: 'nationality',
			render: nat => (
				<Tag color={getNationalityColor(nat)} key={nat}>
					{nat}
				</Tag>
			)
		},
	];
}
