import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../Common/FormsControls/FormsControls'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {/* <input placeholder={'Login'} /> */}
        <Field placeholder={'Login'} name={'login'} component={Input} validate={[required]} />
      </div>
      <div>
        <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]} />
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={Input} /> Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login;