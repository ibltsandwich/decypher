import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
    };
};

const mdp = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        otherForm: (
            <span className="session-link" onClick={() => dispatch(openModal('login'))}>
                ALREADY HAVE AN ACCOUNT? SIGN IN HERE
            </span>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(SessionForm);