export function filterByGender(gender, list) {
	if (gender) {
		return list.filter(user => user.gender.toLowerCase() === gender.toLowerCase())
	}
	return list;
}

export function filterByCountry(list, country) {
	if (country) {
		return list.filter(user => user.location.country.toLowerCase() === country.toLowerCase())
	}
	return list;
}

export function filterByInput(list, value) {
	if (value) {
		return list.filter(user => {
			const {name} = user;
			value = value.toLowerCase();
			const userName = `${name.title}. ${name.first} ${name.last}`.toLowerCase();
			return userName.includes(value)
		})
	}
	return list;
}

export function getGendersCounts(list) {
	if (list) {
		return {
			males: filterByGender('male', list).length,
			females: filterByGender('female', list).length,
			indeterminate: filterByGender('indeterminate', list).length,
		}
	}
	return {
		males: 0,
		females: 0,
		indeterminate: 0,
	}
}

export function getPeopleNationalityCounts(list) {
	const countries = {};
	if (list) {
		list.forEach(user => {
			const country = user.location.country;
			if (!countries.hasOwnProperty(country)) {
				countries[country] = 1;
			} else {
				countries[country] = countries[country] + 1;
			}
		});
	}
	return countries;
}
