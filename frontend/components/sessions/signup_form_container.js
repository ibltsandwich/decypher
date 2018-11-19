import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        demoUser: {
            username: "sirdemo",
            password: "demopassword"
        }
    };
};

const mdp = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        otherForm: (
            <span className="session-link" onClick={() => dispatch(openModal('login'))}>
                ALREADY HAVE AN ACCOUNT? SIGN IN
            </span>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
        login: user => dispatch(login(user))
    };
};

export default connect(msp, mdp)(SessionForm);