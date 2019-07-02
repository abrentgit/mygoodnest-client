import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './Input';
import { login } from '../actions/auth';
import { required, nonEmpty } from './Validators';

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.email, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        {error}
        <label htmlFor="email">Email</label>
        <Field
          component={Input}
          type="text"
          name="email"
          id="email"
          validate={[required, nonEmpty]}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          id="password"
          validate={[required, nonEmpty]}
        />
        <button disabled={this.props.pristine || this.props.submitting}>
          Log in
                </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'email'))
})(LoginForm);


// import React from 'react';

// class Login extends React.Component {
//   render() {
//     return (
//       <div className="login">
//         <form>
//           <label>
//             Email:
//           <input type="text" name="email" onChange={this.handleChange} required />
//           </label>
//           <label>
//             Password:
//           <input type="text" name="password" required />
//           </label>
//           <button className="form-btn">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Login;
