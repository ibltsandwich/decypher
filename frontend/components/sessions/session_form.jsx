import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { username: '', password: '', email: '' };
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
                })}
            </ul>
        );
    }

    render() {
        let link, email;
        if (this.props.formType === 'Log In') {
            link = (<Link to='/signup' >CREATE AN ACCOUNT</Link >);
            email=""
        } else {
            link = (<Link to='/login' >ALREADY HAVE AN ACOUNT? LOG IN HERE</Link>);
            email = (<label> Email:
                        <input
                            type="text"
                            value={this.state.email}
                            className="login-input"
                            onChange={this.update("email")}
                        />
                    </label>
            )
        }
        return (
            <div className="session-screen">
                <form onSubmit={this.handleSubmit} className="session-form">
                    {this.props.formType} TO DECYPHER
                    <br></br>
                    {this.renderErrors()}
                    <label>Username:
                        <input 
                            type="text" 
                            value={this.state.username} 
                            className="session-input" 
                            onChange={this.update("username")} />
                    </label>
                    {email}
                    <label>Password:
                        <input 
                            type="password" 
                            value={this.state.password} 
                            className="session-input" 
                            onChange={this.update("password")} />
                    </label>
                    <input type="submit" value={this.props.formType} className="session-btn"/>
                        <br></br>
                        {link}
                        <br></br>
                        <a href="#">DEMO LOGIN</a>
                </form>
            </div>
        )
    }
}

export default SessionForm;