import React from 'react';
import './style.scss';
import {Typography} from 'antd';

const {Title, Text} = Typography;


const View = ({collectionSize, gendersCount, countries, isLoading}) => {
	const getPredominate = () => {
		const {males, females} = gendersCount;

		if (males === 0 && females === 0) {
			return null;
		} else if (males === females) {
			return <Text mark>Equal number of men and women</Text>
		}

		return (
			<Text mark>
				{males > females
					? 'Men'
					: 'Woman'
				}
				&nbsp;
				predominate
			</Text>
		)
	};

	return isLoading
		? null
		: (
			<div className="contacts__statistic">
				<Title level={3}>Statistic</Title>
				<div className="size">
					<div className="size_item">
						<span className="label">Collection size</span>
						<span className="value">{collectionSize}</span>
					</div>
					<div className="size_item">
						<span className="label">Males</span>
						<span className="value">{gendersCount.males}</span>
						<div className="additional">{ getPredominate() }</div>
					</div>
					<div className="size_item">
						<span className="label">Females</span>
						<span className="value">{gendersCount.females}</span>
					</div>
					<div className="size_item">
						<span className="label">Indeterminate</span>
						<span className="value">{gendersCount.indeterminate}</span>
					</div>
				</div>

				<div className="nationalities">
					<div className="title">Nationalities</div>
					<div className="nat_items">
						{
							Object.keys(countries).map(country => (
								<div className="nat_item" key={country}>
									<span className="label">{country}:</span>
									<span className="value">{countries[country]} contacts</span>
								</div>
							))
						}
					</div>
				</div>
			</div>
		);
};




export { View };
