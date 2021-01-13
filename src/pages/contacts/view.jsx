import React, {useEffect, useState} from 'react';
import {FormFilter} from '../../components/contacts/formFilter';
import {ContactsList} from '../../components/contacts/contactsList';
import {Header} from '../../components/contacts/header';
import {Statistic} from '../../components/contacts/statistic';
import {
	filterByGender,
	filterByCountry,
	filterByInput,
	getGendersCounts,
	getPeopleNationalityCounts
} from './utils';
import {defaultUsersFilterValues} from '../../components/contacts/formFilter/view';

const View = ({usersList, isLoading, requestUsers}) => {
	if (!usersList.length && !isLoading) {
		requestUsers();
	}

	const [filteredList, setFilteredList] = useState(usersList);

	const [filter, setFilter] = useState({defaultUsersFilterValues});
	const [nationalityList, setNationalityList] = useState([]);

	useEffect(() => {
		const nat = Array.from(new Set(usersList.map(user => user.location.country)));
		setNationalityList(nat || []);
		filterUsers(filter)
	}, [usersList, filter]);

	function filterUsers(filter) {
		setFilter(filter);
		if (usersList) {
			const filteredByGender = filterByGender(filter.gender, usersList);
			const filteredByCountry = filterByCountry(filteredByGender, filter.country);
			const filteredByInput = filterByInput(filteredByCountry, filter.name);
			setFilteredList(filteredByInput);
		}
	}

	return (
		<div className={'page page--contacts'}>
			<Header />
			<FormFilter
				filterUsers={filterUsers}
				countries={nationalityList}
			/>
			<ContactsList usersList={filteredList} />
			<Statistic
				collectionSize={filteredList && filteredList.length}
				gendersCount={getGendersCounts(filteredList)}
				countries={getPeopleNationalityCounts(filteredList)}
			/>
		</div>
	);
};

export { View };
