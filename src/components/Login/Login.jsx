import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../Common/FormsControls/FormsControls'
import { login } from '../../redux/auth-reducer'
import { Navigate } from 'react-router-dom'
import s from '../Common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]} />
      </div>
      <div>
        <Field type={'password'} placeholder={'Password'} name={'password'} component={Input} validate={[required]} />
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={Input} /> Remember me
      </div>
      {error && <div className={s.formSummaryError}>
        {error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }
  if (props.isAuth) {
    return <Navigate to={'/profile'} />
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);