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
        let link, email, heading;
        if (this.props.formType === 'Sign In') {
            link = (<Link to='/signup' className="session-link">CREATE AN ACCOUNT</Link >);
            email=""
            heading = (<span className="sess-heading">SIGN IN TO DECYPHER</span>)
        } else {
            link = (<Link to='/login' className="session-link">ALREADY HAVE AN ACCOUNT? LOG IN HERE</Link>);
            email = (
                <input
                type="text"
                value={this.state.email}
                className="session-input"
                onChange={this.update("email")}
                placeholder="Email"
                />
                )
            heading = (<span className="sess-heading">SIGN UP FOR DECYPHER</span>)
        }
        return (
            <div className="session-screen">
                <form onSubmit={this.handleSubmit} className="session-form">
                    {heading}
                    <br></br>
                    {this.renderErrors()}
                    <input 
                        type="text" 
                        value={this.state.username} 
                        className="session-input" 
                        onChange={this.update("username")}
                        placeholder="Username" />
                    {email}
                    <input 
                        type="password" 
                        value={this.state.password} 
                        className="session-input" 
                        onChange={this.update("password")}
                        placeholder="Password" />

                    <button type="submit" className="session-btn">{this.props.formType}</button>

                        <div className="sess-links">
                            {link}
                        </div>
                </form>
            </div>
        )
    }
}
// {/* <Link to="#" className="session-link">DEMO LOGIN</Link> */}

export default SessionForm;