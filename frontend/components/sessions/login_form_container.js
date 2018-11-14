import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign In',
    };
};

const mdp = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        otherForm: (
            <span className="session-link" onClick={() => dispatch(openModal('signup'))}>
                CREATE AN ACCOUNT
            </span>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(SessionForm);