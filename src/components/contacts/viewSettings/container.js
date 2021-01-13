import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';
import {requestUsers, setContactsView} from '../../../store/contacts/actions';

const mapStateToProps = (state) => {
	return state.contacts;
};

const mapDispatchToProps = dispatch => {
	return {
		setContactsView: () => {
			dispatch(setContactsView())
		},
		requestUsers: () => {
			dispatch(requestUsers())
		}
	};
};

const ViewSettings = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);

export { ViewSettings };
