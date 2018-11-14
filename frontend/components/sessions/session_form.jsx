import React from 'react';


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
        this.props.processForm(this.state).then(this.props.closeModal)
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
        const {formType, otherForm, closeModal} = this.props
        let email, heading;
        if (formType === 'Sign In') {
            email = ""
            heading = (<span className="sess-heading">SIGN IN TO DECYPHER</span>)
        } else {
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
                <div onClick={closeModal} className="close-x">X</div>
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

                    <button type="submit" className="session-btn">{formType}</button>

                        <div className="sess-links">
                            {otherForm}
                        </div>
                </form>
            </div>
        )
    }
}
// {/* <Link to="#" className="session-link">DEMO LOGIN</Link> */}

export default SessionForm;