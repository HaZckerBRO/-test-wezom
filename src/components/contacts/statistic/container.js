import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';

const mapStateToProps = (state) => {
	return state.contacts;
};

const mapDispatchToProps = null;

const Statistic = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);

export { Statistic };
