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
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => update(e, 'email')}placeholder="email" />
            {errorState.email && errorState.email}
            <input type="text" onChange={e => update(e, 'password')} placeholder="password"/>
            {errorState.password && errorState.password}
            <button type="submit">Submit</button>
        </form>
    )
}

export default withRouter(LoginForm)