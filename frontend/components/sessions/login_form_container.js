import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign In',
        demoUser: {
            username: "sirdemo",
            password: "demopassword"
        }
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
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
        login: user => dispatch(login(user))
    };
};

export default connect(msp, mdp)(SessionForm);