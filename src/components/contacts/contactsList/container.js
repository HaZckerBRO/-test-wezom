import { compose } from 'redux';
import { connect } from 'react-redux';
import { View } from './view';

const mapStateToProps = (state) => {
	return {
		isLoading: state.contacts.isLoading,
		contactsView: state.contacts.contactsView,
		fetchError: state.contacts.fetchError
	};
};

const mapDispatchToProps = null;

const ContactsList = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(View);

export { ContactsList };
