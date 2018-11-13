import React from 'react';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { user: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(this.state);
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, idx) => {
                    return (
                        <li key={idx}>
                            {error}
                        </li>
                    )
                )}}
            </ul>
        );
    }

    render() {
        <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form">
                SIGN IN TO DECYPHER
                


            </form>
        </div>
    }
}