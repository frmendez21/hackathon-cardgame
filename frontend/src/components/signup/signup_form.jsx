import React, {useState, useEffect} from 'react';
import './signup_form.css'

const SignupForm = ({errors, signup}) => {
    const [userInfo, setUserInfo] = useState({});
    const [errorState, setErrors] = useState({});

    useEffect(() => {
        if(errors.email) setErrors({'email': errors.email})
        if(errors.username) setErrors({'username': errors.username})
        if(errors.password) setErrors({'password': errors.password})
        if(errors.password2) setErrors({'password2': errors.password2})
    }, [errors])

    const handleSubmit = e => {
        e.preventDefault();
        if(!userInfo.username || !userInfo.email || !userInfo.password || !userInfo.password2) return;
        signup(userInfo);
    }

    const clearErrors = () => setErrors({});

    const update = (e, key) => {
       clearErrors();
       const info = Object.assign({}, userInfo, {[key]: e.currentTarget.value})
       setUserInfo(info)
    };

    return(
        <form className="signup-form" onSubmit={handleSubmit}>
            <input type="text" onChange={e => update(e, 'username')} placeholder="username"/>
            {errors.username && <p id="error">{errorState.username}</p>}
            <input type="text" onChange={e => update(e, 'email')} placeholder="email" autoComplete="username"/>
            {errors.email && <p id="error">{errorState.email}</p>}
            <input type="password" onChange={e => update(e, 'password')} placeholder="password" autoComplete="new-password"/>
            {errors.password && <p id="error">{errorState.password}</p>}
            <input type="password" onChange={e => update(e, 'password2')} placeholder="confirm password" autoComplete="new-password"/>
            {errors.password2 && <p id="error">{errorState.password2}</p>}
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignupForm;