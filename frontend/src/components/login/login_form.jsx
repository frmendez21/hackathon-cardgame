import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';

const LoginForm = ({errors, login}) => {

    const [userInfo, setUserInfo] = useState({});
     const [errorState, setErrors] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        if(!userInfo.email || !userInfo.password) return;
        login(userInfo)

    }
    const clearErrors = () => setErrors({});

    useEffect(() => {
        if(errors.email) setErrors({'email': errors.email})
        if(errors.password) setErrors({'password': errors.password})
    }, [errors])

    const update = (e, key) => {
        clearErrors()
        const info = Object.assign({}, userInfo, {[key]: e.currentTarget.value})
        setUserInfo(info);
    }

    return(
        <form className="login-form" onSubmit={handleSubmit}>
            <input type="text" onChange={e => update(e, 'email')} autoComplete="username" placeholder="email" />
            {errorState.email && <p id="error">{errorState.email}</p> }
            <input type="password" onChange={e => update(e, 'password')} autoComplete="current-password" placeholder="password"/>
            {errorState.password && <p id="error">{errorState.password}</p>}
            <button type="submit">Submit</button>
        </form>
    )
}

export default withRouter(LoginForm)