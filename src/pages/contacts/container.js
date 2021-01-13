import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';
import {requestUsers} from '../../store/contacts/actions';

const mapStateToProps = (state) => {
	return state.contacts;
};

const mapDispatchToProps = dispatch => {
	return {
		requestUsers: () => {
			dispatch(requestUsers())
		}
	};
};

const PageContacts = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);

export { PageContacts };
