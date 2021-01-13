import React, {useState, useEffect} from 'react';
import {Pagination, Tag} from 'antd';
import './style.scss';
import {copyToClipboard, getNationalityColor} from '../utils';


const renderUser = (user) => {
	const {picture, name, birthday, email, phone, location, nationality: nat} = user;
	return (
		<div className="user-item" key={user.key}>
			<img src={picture} className="thumbnail" />
			<div className="info">
				<div className="title">
					<span className="name">{name}</span>
					<span className="birthday">({birthday.age} years)</span>
				</div>
				<div className="contacts">
					<a onClick={copyToClipboard} data-value={email}>{email}</a>
					<a onClick={copyToClipboard} data-value={phone}>{phone}</a>
					<b>/{location.country}/</b>
					<p>
						{location.street.number}&nbsp;
						{location.street.name},&nbsp;
						{location.city},&nbsp;
						{location.state}&nbsp;
						{location.postcode}
					</p>
				</div>
				<Tag color={getNationalityColor(nat)} key={nat} className="nationality">
					{nat}
				</Tag>
			</div>
		</div>
	)
};

export const TiledView = ({users, count}) => {
	const allUsersList = users.map(renderUser);
	const [pagNumber, setPagNumber] = useState(1);
	const [showedUsers, setShowedUsers] = useState(allUsersList.slice(0, 5));

	useEffect(() => {
		setPagNumber(1);
		setShowedUsers(allUsersList.slice(0, 5));
	}, [users, count]);


	const paginationChangeHandler = (value) => {
		const start = (value - 1)  * 5;
		const end = start + 5;
		setPagNumber(value);
		setShowedUsers(allUsersList.slice(start, end));
	};

	return (
		<>
			{showedUsers}
			<div>
				<Pagination
					current={pagNumber}
					total={count * 2}
					onChange={paginationChangeHandler}
					hideOnSinglePage
					showSizeChanger={false}
				/>
			</div>

		</>
	)
};
